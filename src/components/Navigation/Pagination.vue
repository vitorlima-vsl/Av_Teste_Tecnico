<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});
</script>

<template>
  <div class="flex justify-center items-center gap-2 mt-4 w-[100%] flex-wrap">
    <button @click="$emit('previous')" :disabled="currentPage === 1"
      class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer  h-10">
      Anterior
    </button>
    <button v-for="page in totalPages" :key="page" @click="$emit('load', page)" class="pagination-button rounded h-10"
      :class="{ 'active': page === currentPage }">
      {{ page }}
    </button>
    <button @click="$emit('next')" :disabled="currentPage === totalPages"
      class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer  h-10">
      Próximo
    </button>
  </div>
</template>



<style scoped>
.pagination-button {
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
}

.pagination-button:hover {
  background-color: #e9ecef;
}

.pagination-button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}

.pagination-button:disabled {
  background-color: #e9ecef;
  cursor: not-allowed;
}
</style>