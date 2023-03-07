<template>
  <div class="py-6 px-6">
    <div v-if="isLoggedIn" class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <p class="text-center pa-4 text-[green] font-bold">You are Admin!</p>
    </div>

    <unAuthorize v-if="!isLoggedIn" />
  </div>
</template>

<script>
import unAuthorize from ".././components/admin/unAuthorize.vue";

export default {
  name: "Admin",
  components: {
    unAuthorize
  },
  layout: 'admin',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
