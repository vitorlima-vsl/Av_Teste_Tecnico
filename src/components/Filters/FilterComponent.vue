<script setup lang="ts">
import { searchName, searchVisibility, handleSearch, handleVisibility } from '@/composables/useLoadRepositories';


</script>

<template>
     <div class="flex gap-x-2 my-4 max-[768px]:px-4 max-[768px]:text-xs">
      <div class="shadow-lg border-1 border-gray-200/70 flex w-[calc(100%-64px)] ">
        <svg class="w-5 m-4.5 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.!--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        <input v-model="searchName" class="focus:outline-0 w-full rounded-b " type="text" placeholder="Buscar repositório" />
        <button @click="handleSearch()" class="bg-gray-200/70 border-l-1  border-gray-400 hover:bg-gray-300/70 rounded-r px-4 cursor-pointer">Buscar</button>
      </div>
      <select v-model="searchVisibility" @change="handleVisibility(searchVisibility)" class="shadow-lg focus:outline-0 border-1 border-gray-200/70 cursor-pointer px-2 rounded-b hover:bg-gray-100" name="visibility" id="visibility">
        <option value="all">Todos</option>
        <option value="public">Publicos</option>
        <option value="private">Privados</option>
      </select>
    </div>
</template>