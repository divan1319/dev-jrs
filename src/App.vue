<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavbarComponent from './components/public/NavbarComponent.vue';


</script>

<template>
  <div v-if="$route.path != '/' " class="dark:bg-black">
    <NavbarComponent />
  </div>
<RouterView />
</template>
