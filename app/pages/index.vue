<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <div>
      <UiCard class="mb-3 bg-gray-700 rounded-xl" draggable="true">
        <UiCardHeader role="button"> Name </UiCardHeader>
        <UiCardContent> Content </UiCardContent>
        <UiCardFooter> Footer </UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ICard, IColumn } from "../components/kanban/kanban.types";

useSeoMeta({
  title: 'Home | CRM System'
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);



</script>