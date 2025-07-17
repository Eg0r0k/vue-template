<template>
  <div class="flex flex-1 flex-col  min-h-svh">
    <MainHeader />
    <main id="main" class="flex flex-grow flex-1 flex-col">
      <RouterView />
    </main>
    <MainFooter />
  </div>


</template>
<script lang="ts" setup>
import MainFooter from '@/components/footer/MainFooter.vue';
import MainHeader from '@/components/header/MainHeader.vue';
import { useColorMode } from '@vueuse/core';

// The theme hook must be called from root
useColorMode();
</script>

<style>
@reference "@/assets/base.css";
</style>