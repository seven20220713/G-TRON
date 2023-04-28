<template>
  <section class="section-hero section-shaped my-0">
    <div class="shape shape-style-1 shape-primary">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 text-center pt-lg">
            <img src="img/brand/white.png" style="width: 200px;" class="img-fluid" />
            <p class="lead text-white mt-4 mb-5">G-TRON是一个开源的波场靓号生成器是 一款强大的web3工具 用来生成心仪的波场地址</p>
            <div class="btn-wrapper">
              <base-button tag="a" href="#" class="mb-3 mb-sm-0" type="primary" icon="ni ni-atom" @click="toGenerator">现在开始</base-button>
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-around stars-and-coded">
          <div class="col-sm-4">
            <span class="text-white alpha-7 ml-3">Star us on</span>
            <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
              <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px" />
            </a>
          </div>
          <div class="col-sm-4 mt-4 mt-sm-0 text-right">
            <span class="text-white alpha-7">Coded By Nis</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    toGenerator() {
      // document.querySelector('#generator').scrollIntoView()
      window.scrollTo({
        top: 1500,
        behavior: 'smooth',
      })
    },
  },
}
</script>
<style>
</style>
