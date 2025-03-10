<script setup lang="ts">
import { onMounted } from 'vue';
import RepositoryCard from '@/components/RepositoryCard.vue';
import Pagination from '../components/Navigation/Pagination.vue';
import { repositories, currentPage, totalPages, loadRepositories, handleSearch,  } from '../composables/useLoadRepositories';
import { goToPreviousPage, goToNextPage } from '../composables/usePagination';
import {openModal} from '@/composables/useModal';
import UserModal from '@/components/UserModal.vue';
import FilterComponent from '@/components/Filters/FilterComponent.vue';

onMounted(async () => {
  await loadRepositories(1);
});
</script>

<template>
  <div class="max-w-[1200px] mx-auto mb-12  relative">
    <FilterComponent />
    <div class="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] gap-[20px] max-[768px]:p-4 py-2 mb-4">
      <RepositoryCard v-for="repository in repositories" :key="repository.id" :repository="repository" />
    </div>

    <Pagination :currentPage="currentPage" :totalPages="totalPages" @previous="goToPreviousPage" @next="goToNextPage"
      @load="handleSearch" />

    <UserModal 
    v-if="openModal"/>
  </div>
</template>
