<template>
  <div class="home">
    <button @click="goout">退出</button>
  </div>
</template>
<script>
export default {
  data () { return {} },
  created () {},
  methods: {
    goout () {
      sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
