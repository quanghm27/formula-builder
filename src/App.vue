<template>
  <div id="app">
    <div class="w-full h-screen bg-blue-200 py-4">
      <transition name="moveInUp">
        <router-view />
      </transition>
      <Panel />
    </div>
  </div>
</template>

<script>
import Panel from './components/common/ModalFormular'

export default {
  name: 'App',
  components: {
    Panel
  }
}
</script>

<style>
</style>
