<script setup lang="ts">
import { Dialog, DialogPanel } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['open-menu'])
defineProps({
  isOpen:{
    type:Boolean,
    required:true
  }
})
const menuToggle = () =>{
emit('open-menu')

}
</script>
<template>
      <Dialog as="div" class="lg:hidden" @close="menuToggle" :open="isOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="menuToggle"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <RouterLink
                  to="/"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="menuToggle"
                  >Inicio</RouterLink
                >
                <RouterLink
                  to="/proyectos"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Proyectos</RouterLink
                >
                <RouterLink
                  to="/about"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="menuToggle"
                  >Acerca de</RouterLink
                >
                <RouterLink
                  to="/login"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="menuToggle"
                  >Iniciar Sesión</RouterLink
                >
              </div>
              <div class="py-6">

                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Registrarme</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
</template>
