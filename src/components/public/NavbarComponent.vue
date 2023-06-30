<script setup lang="ts">
import NavComponent from '@/components/public/NavToggleComponent.vue'
import {Bars3Icon} from '@heroicons/vue/24/outline'
import { ref } from 'vue';
const mobileMenuOpen = ref(false)

const openMenu = ()=>{
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
<template>
    <header class="">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="openMenu"
          >
            
            <Bars3Icon class="h-6 w-6"  />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <RouterLink to="/" class="text-sm font-semibold leading-6 text-white">Inicio</RouterLink>
          <RouterLink to="/proyectos" class="text-sm font-semibold leading-6 text-white"
            >Proyectos</RouterLink
          >
          <RouterLink to="/about" class="text-sm font-semibold leading-6 text-white"
            >Acerca de</RouterLink
          >
          <RouterLink to="/login" class="text-sm font-semibold leading-6 text-white"
            >Iniciar Sesión</RouterLink
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-white"
            >Registrarme <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </nav>
      <NavComponent @open-menu="openMenu" :isOpen="mobileMenuOpen" />
    </header>
</template>
