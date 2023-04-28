<template>
  <section class="section section-components">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 mt-5 mt-lg-0">
          <h3 class="h4 text-success font-weight-bold mt-md" id="generator">创建地址</h3>
          <tabs fill class="flex-column flex-md-row">
            <card shadow>
              <base-input v-model="matchingWords" placeholder="地址尾号"></base-input>
              <base-alert v-if="hasSpecialStr" type="warning" icon="ni ni-bell-55" style="margin-bottom: 10px">
                <span slot="text">
                  <strong>输入的字符无效</strong>
                </span>
              </base-alert>
              <base-checkbox v-model="checkCase" class="mb-3">区分大小写</base-checkbox>
              <!-- <base-slider v-model="threadCount" :range="{min: 1, max: 8}"></base-slider> -->
              <base-button v-if="isLoading" type="warning" @click="handleStop()">终止</base-button>
              <base-button v-else type="primary" @click="handleGen()">开始生成</base-button>
              <Spinner v-if="isLoading" message="正在创建新地址" />
            </card>
          </tabs>
          <template v-if="genList && genList.length > 0">
            <h3 class="h4 text-success font-weight-bold mt-md">生成结果</h3>
            <card shadow v-for="(item, index) in genList" :key="index">
              <p>地址:{{item.address}}</p>
              <base-button @click="handleCopy(item)" class="btn-1" size="sm" type="success">复制私钥</base-button>
            </card>
          </template>
        </div>
      </div>
    </div>

    <modal :show.sync="showCopyModal">
      <template slot="header">
        <h5 class="modal-title" id="exampleModalLabel">复制成功</h5>
      </template>
      <div>私钥已复制到剪贴板，您可以在需要的地方进行粘贴显示。</div>
      <p style="margin-top:20px">注意：私钥是控制钱包的唯一途径，请不要将私钥泄露给他人，以防资产被盗。</p>
      <template slot="footer">
        <base-button type="secondary" @click="showCopyModal = false">关闭</base-button>
      </template>
    </modal>
  </section>
</template>
<script>
import Modal from '@/components/Modal.vue'
import TabPane from '@/components/Tabs/TabPane.vue'
import Tabs from '@/components/Tabs/Tabs.vue'
import Worker from '@/plugins/c.worker.js'
import Vue from 'vue'
import VueClipBoard from 'vue-clipboard2'
import Spinner from 'vue-simple-spinner'
import VueWorker from 'vue-worker'
Vue.use(VueWorker)
Vue.use(VueClipBoard)
export default {
  components: {
    Tabs,
    TabPane,
    Modal,
    Spinner,
  },
  computed: {
    isGenOut() {
      return this.genList && this.genList.length > 0
    },
    hasSpecialStr() {
      if (!this.matchingWords) {
        return false
      }
      var specialChars =
        '~·`!！@#$￥%^…&*()（）—-_=+[]{}【】、|\\;:；：\'"“‘,./<>《》?？，。'
      var len = specialChars.length
      for (var i = 0; i < len; i++) {
        if (
          this.matchingWords.indexOf(specialChars.substring(i, i + 1)) != -1
        ) {
          return true
        }
      }
      return false
    },
  },
  data() {
    return {
      showCopyModal: false,
      canWorker: false,
      isLoading: false,
      checkCase: true,
      matchingWords: undefined,
      genList: [],
      workerList: [],
      threadCount: 2,
      copyList: [],
    }
  },
  beforeDestroy() {
    this.handleStop()
  },
  methods: {
    /** 停止生产 */
    handleStop() {
      if (this.workerList && this.workerList.length) {
        this.workerList.forEach((w) => {
          w.terminate()
        })
      }
      this.isLoading = false
    },
    /** 点击生成 */
    handleGen() {
      if (!this.matchingWords) {
        return
      }
      setTimeout(() => {
        this.handleStop()
        this.workerList = []
        this.isLoading = true
        for (let i = 0; i < this.threadCount; i++) {
          let wk = new Worker()
          wk.addEventListener('message', (evt) => {
            const r = evt.data
            this.genList.unshift(r)
            this.isLoading = false
            this.handleStop()
          })
          wk.postMessage(['begin', this.matchingWords, this.checkCase])
          this.workerList.push(wk)
        }
      }, 500)
    },
    /** 复制私钥 */
    handleCopy(key) {
      this.$copyText(key.privateKey).then(
        (e) => {
          this.showCopyModal = true
        },
        (e) => {
          console.log('复制失败：', e)
        }
      )
      this.copyList.push(key)
    },
  },
}
</script>
<style>
</style>
