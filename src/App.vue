<template>
  <div id="app">
    <div class="w-full h-screen bg-blue-200 py-4">
      <transition name="moveInUp">
        <router-view />
      </transition>
      <Modal />
    </div>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal"

export default {
  name: 'App',
  components: {
    Modal,
  }
}
</script>

<style>
</style>
