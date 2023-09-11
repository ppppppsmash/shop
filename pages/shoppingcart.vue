<script setup>
import MainLayout from '~/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[120px] mx-auto px-2">
      <div v-if="true" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img
            class="mx-auto"
            width="250"
            src="/cart-empty.png"
          />

          <div class="text-xl text-center mt-4">
            No items yet?
          </div>

          <div v-if="true" class="flex text-center">

          </div>

        </div>
      </div>
    </div>
  </MainLayout>
</template>