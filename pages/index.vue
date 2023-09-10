<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
const products = [
  {
    id: 1,
    title: 'Title 1',
    description: 'This is a production',
    url: 'https://picsum.photos/id/7/800/800',
    price: 100
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'This is a production',
    url: 'https://picsum.photos/id/1/800/800',
    price: 100
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'This is a production',
    url: 'https://picsum.photos/id/9/800/800',
    price: 100
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'This is a production',
    url: 'https://picsum.photos/id/10/800/800',
    price: 100
  }
]
</script>

<template>
  <MainLayout>
    <div
      id="IndexPage"
      class="mt-4 max-w-[1200px] mx-auto px-2"
    >
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>