<template>
  <div>
    <hero></hero>
    <web-introduce></web-introduce>
    <generator></generator>
  </div>
</template>
<script>
import Generator from './components/Generator'
import Hero from './components/Hero'
import WebIntroduce from './components/WebIntroduce'
export default {
  name: 'Home',
  components: {
    Hero,
    WebIntroduce,
    Generator,
  },
}
</script>
