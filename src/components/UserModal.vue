<script setup lang="ts">
import { toggleModal, dataModal } from "@/composables/useModal.ts";
</script>

<template>
  <div
    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[80%] max-lg:py-4 min-lg:w-[800px] min-lg:h-[450px] z-50 flex flex-col items-center justify-center rounded-b-lg"
  >
    <button
      @click="toggleModal"
      class="absolute -top-3 -right-2 text-2xl text-gray-500 bg-white px-3 py-2 cursor-pointer shadow-md rounded hover:scale-105 transition-all duration-300 group"
    >
      <svg
        class="group-hover:fill-gray-700 fill-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        style="width: 16px"
        fill=""
        viewBox="0 0 384 512"
      >
        <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.!-->
        <path
          d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
        />
      </svg>
    </button>
    <div
      class="flex flex-col justify-between w-[80%] items-center border-b-2 border-gray-200 pb-4"
    >
      <img
        :src="dataModal.avatar_url"
        alt="Owner Avatar"
        class="size-32 rounded-full"
      />
      <span class="text-2xl">{{ dataModal.name }}</span>
      <span class="text-gray-600">{{ dataModal.login }}</span>
    </div>
    <div class="w-[80%] mt-4 flex flex-col">
      <a
        :href="dataModal.html_url"
        target="_blank"
        class="font-semibold text-gray-800"
        >URL do perfil:
        <span class="font-normal text-cyan-500">{{ dataModal.html_url }}</span>
      </a>
      <span class="font-semibold text-gray-800"
        >ID: <span class="text-gray-600 font-normal">{{ dataModal.id }}</span>
      </span>
    </div>
  </div>
  <div
    @click="toggleModal"
    class="fixed top-0 left-0 z-10 w-full h-full bg-black/10"
  ></div>
</template>
