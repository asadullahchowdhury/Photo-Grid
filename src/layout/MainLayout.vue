<template>
  <div class="container">
    <div id="layout">
      <MainHeader></MainHeader>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader.vue'

export default {
  name: 'MainLayout',
  components: {
    MainHeader
  }
}
</script>