<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-6">
          <h3 class="text-primary font-weight-light mb-2">感谢您的使用，如果我们的工具对您带来了帮助，欢迎为我们捐赠!</h3>
          <h4 class="mb-0 font-weight-light">TNaVfSspRXBR5MKj6i9K3orTrMAFKKQntT</h4>
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{year}}
            <a href="#" target="_blank" rel="noopener">G-TRON</a>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a href="https://opensource.org/license/mit/" class="nav-link" target="_blank" rel="noopener">MIT License</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>
<style>
</style>
