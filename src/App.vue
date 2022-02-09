<template>
  <div id="app">
    <transition name="moveInUp">
      <router-view />
    </transition>
    <Modal />
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
