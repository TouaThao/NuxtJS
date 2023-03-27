<template>
  <div>
    <p>Index</p>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductsCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nuxt Product",
  meta: [{ name: "description", content: "Nuxt 3 products" }],
});
</script>

<style scoped></style>
