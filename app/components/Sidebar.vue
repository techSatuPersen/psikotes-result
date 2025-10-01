<template>
  <div class="sidebar bg-white border-r border-gray-200 h-screen w-64 fixed left-0 top-0 overflow-y-auto">
    <div class="p-4 border-b border-gray-200">
      <h2 class="text-lg font-bold">Psikotes Minat Bakat Umum</h2>
      <p class="text-sm text-gray-600">Lorem ipsum Dolor Sit Amet</p>
    </div>
    
    <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Opening</div>
      <NuxtLink to="/opening" class="nav-link" :class="{ 'active': isActive('/opening') }">
        <span class="block text-black font-bold">Selamat Datang</span>
      </NuxtLink>
      <NuxtLink to="/bigfive" class="nav-link" :class="{ 'active': isActive('/bigfive') }">
        <span class="block text-black font-bold">Hasil Tes Big Five</span>
      </NuxtLink>
      <NuxtLink to="/" class="nav-link" :class="{ 'active': isActive('/') }">
        <span class="block text-black font-bold">Psikotes Minat Bakat Umum</span>
      </NuxtLink>
    </div>
    
    <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Bagian 1</div>
      <NuxtLink to="#fondasi-kepribadian" class="nav-link" :class="{ 'active': isActive('#fondasi-kepribadian') }">
        <span class="block text-black font-bold">Fondasi Kepribadian Fundamental</span>
      </NuxtLink>
    </div>
    
    <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Bagian 2</div>
      <NuxtLink to="#mozaik-kepribadian" class="nav-link" :class="{ 'active': isActive('#mozaik-kepribadian') }">
        <span class="block text-black font-bold">Mozaik Kepribadian: Melihat Diri dari Berbagai Lensa</span>
      </NuxtLink>
    </div>
    
    <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Bagian 3</div>
      <NuxtLink to="#lorem-ipsum" class="nav-link" :class="{ 'active': isActive('#lorem-ipsum') }">
        <span class="block text-black font-bold">Lorem ipsum dolor et amet </span>
      </NuxtLink>
    </div>
    
    <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Bagian 4</div>
      <NuxtLink to="#adipiscing-connector" class="nav-link" :class="{ 'active': isActive('#adipiscing-connector') }">
        <span class="block text-black font-bold">Adipiscing Connector</span>
      </NuxtLink>
    </div>
    
    <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Bagian 5</div>
      <NuxtLink to="#pengujian-pengenalan" class="nav-link" :class="{ 'active': isActive('#pengujian-pengenalan') }">
        <span class="block text-black font-bold">Pengujian Pengenalan Penemuan Diri: Sebuah Awal yang Baru</span>
      </NuxtLink>
    </div>
        <div class="py-2 border-b border-gray-200">
      <div class="px-4 py-2 text-md font-bold text-gray-500 uppercase">Closing</div>
      <NuxtLink to="/closing" class="nav-link" :class="{ 'active': isActive('/closing') }">
        <span class="block text-black font-bold">Menutup Perjalanan Penemuan Diri: Sebuah Awal yang Baru</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeLink = ref('');

// Function to check if a link is active
const isActive = (link) => {
  return activeLink.value === link;
};

// Update active link based on URL hash
const updateActiveLink = () => {
  const hash = window.location.hash;
  activeLink.value = hash || '/';
};

// Listen for hash changes
onMounted(() => {
  updateActiveLink();
  window.addEventListener('hashchange', updateActiveLink);
});
</script>

<style scoped>
.sidebar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #4b5563;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.nav-link:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.nav-link.active {
  background-color: #f3f4f6;
  border-left-color: #3b82f6;
  color: #1f2937;
  font-weight: 500;
}
</style>