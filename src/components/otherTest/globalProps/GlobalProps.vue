<template>
  <div class="global-props">
    <div>{{ app.salutatory }}</div>
    <div>
      <input type="text" v-model="text">
      <button @click="changeSalutatory">更换问候语</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalProps',
  inject: ['app'],
  data () {
    return {
      text: null
    }
  },
  methods: {
    changeSalutatory () {
      this.app.saySalutatory(this.text)
    }
  }
}
</script>

<style lang="scss" scoped>
  .global-props {}
</style>
