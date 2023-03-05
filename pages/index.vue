<template>
  <div class="relative">
    <product />
    <loading ref="loading" />
  </div>
</template>

<script>
import Product from "../components/products/products.vue";
import Loading from ".././components/common/loading.vue";

export default {
  name: "IndexPage",
  components: {
    Product,
    Loading
  }
}
</script>
