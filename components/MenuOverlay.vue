<script setup>
import { useUserStore } from '~/stores/user'
const userStore = useUserStore()

// const client = useSupabaseClient()
// const user = useSupabaseUser()

const goTo = (url) => {
  userStore.isMenuOverlay = false
  return navigateTo(``)
}

const signOut = () => {
  client.auth.signOut()
  userStore.isMenuOverlay = false
  return navigateTo('/')
}

const signIn = () => {
  userStore.isMenuOverlay = false
  return navigateTo('/auth')
}
</script>

<template>
  <div
    id="MenuOverlay"
    class="fixed z-50 bottom-0 h-full w-full bg-white px-3"
  >
    <div class="flex items-center justify-between py-5">
      <NuxtLink
        to="/"
        @click="userStore.isMenuOverlay = false"
      >
        <img
          width="170"
          src="/AliExpress-logo.png"
        />
      </NuxtLink>

      <button
        @click="userStore.isMenuOverlay = false"
        class="rounded-full p-1 hover:bg-gray-200"
      >
        <Icon name="mdi:close" size="30" />
      </button>
    </div>

    <div class="flex items-center justify-center pt-5">
      <ul class="w-full ">
        <li
          @click="goTo('orders')"
          class="relative flex items-center justify-start py-2.5 border-b
            px-3 hover:bg-gray-100 cursor-pointer"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:pen-light" size="33" />
            <span>My Orders</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>