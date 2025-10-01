<template>
  <UApp>
    <div class="flex font-jakarta">
      <Sidebar />
      <div class="ml-64 flex-1">
        <NuxtPage />
      </div>
    </div>
  </UApp>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';
import '~/assets/css/fonts.css';
</script>
