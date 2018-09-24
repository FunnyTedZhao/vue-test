<template>
  <div class="parentRouter">
      <h2>{{ title }}</h2>
      <div>
        <router-link to="/parentRouter">默认页面</router-link>
        <router-link to="/parentRouter/parentControl/pc1">父级控制1</router-link>
        <router-link to="/parentRouter/parentControl/pc2">父级控制2</router-link>
        <router-link to="/parentRouter/ownerControl">自己控制</router-link>
      </div>
    <router-view class="prChildren"></router-view>
  </div>
</template>

<script>
export default {
  name: 'ParentRouter',
  data () {
    return {
      title: 'Router练习'
    }
  }
}
</script>

<style>

</style>
