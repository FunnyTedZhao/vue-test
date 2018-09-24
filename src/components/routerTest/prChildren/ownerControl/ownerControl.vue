<template>
  <div class="ownerControl">
      <h3>自己控制</h3>
      <div>
        <router-link to="/parentRouter/ownerControl">控制1</router-link>
        <router-link to="/parentRouter/ownerControl/oc2">控制2</router-link>
      </div>
      <router-view class="ownerControl"></router-view>
  </div>
</template>

<script>
export default {
  name: 'OwnerControl'
}
</script>

<style>

</style>
