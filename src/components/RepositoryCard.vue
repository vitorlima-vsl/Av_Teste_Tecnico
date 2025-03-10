<script setup lang="ts">
import { defineProps } from 'vue';
import type { Repository } from '@/types/repository';
import { createModal } from '@/composables/useModal';
// import { useModal } from '@/composables/useModal.ts';

const props = defineProps<{
  repository: Repository;
}>();

const imageSrc = '/images/imagemRepoPlaceHolder.webp';
const visibilityIcon = props.repository.visibility === 'public' ? '/images/iconPublic.png' : '/images/iconPrivate.png';

const loremPlaceHolder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

</script>

<template>
  <article class="h-[400px] shadow-[0px_12px_12px_rgba(0,0,0,0.10)] rounded hover:scale-105 transition-all duration-300">
    <div class="h-[200px]">
      <img :src="imageSrc" alt="Repository Image" class="w-full h-full object-cover rounded" />
    </div>
    <div class="p-4 flex flex-col justify-between h-[calc(100%-200px)]">
      <div>
        <div class="flex justify-between items-center">
          <div class="w-[calc(100%-24px)]">
            <a :href="repository.html_url" target="_blank" :title="repository.name" class="text-xl break-words hover:text-orange-400 line-clamp-1">{{ repository.name }}</a>
          </div>
          <div>
            <img :src="visibilityIcon" alt="" class="w-[24px]" />
          </div>
        </div>
        <p :title="repository.description" v-if="repository.description" class="line-clamp-2 text-gray-500 ">{{ repository.description }}</p>
        <p v-else :title="loremPlaceHolder" class="line-clamp-2 text-gray-500 ">{{ loremPlaceHolder }}</p>
      </div>
      <div class="flex flex-col justify-between gap-2">
        <div class="flex gap-2">
          <svg class="fill-[orange]" v-for="number in [1, 2, 3]"  xmlns="http://www.w3.org/2000/svg" style="width: 24px;" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <svg class="fill-gray-600" v-for="number in [1, 2]" xmlns="http://www.w3.org/2000/svg" style="width: 24px;" viewBox="0 0 576 512">
            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
          </svg>
        </div>
        <div class="flex gap-2 items-justify">
          <img :src="repository.owner.avatar_url" alt="Owner Avatar" class="size-12 rounded-full" />
          <div class="flex flex-col justify-between">
            <button @click="createModal(repository)" class="text-xl hover:text-orange-400 cursor-pointer">{{ repository.owner.login }}</button >
            <span class="text-xs text-gray-500">Em {{ new Date(repository.created_at).toLocaleDateString() }}</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
