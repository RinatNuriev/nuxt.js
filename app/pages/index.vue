<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column) in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <div>
            <UiCard v-for="card in column.item" :key="card.id" class="mb-3 bg-gray-700 rounded-xl" draggable="true">
              <UiCardHeader role="button"> Услуга: {{ card.name }} </UiCardHeader>
              <UiCardContent> Компания: {{ card.companyName }} </UiCardContent>
              <UiCardDescription class="p-6 pt-0"> {{ dayjs().format('DD MMMM YYYY') }} </UiCardDescription>
              <div class="p-6 pt-0">
                <UiCardDescription> Цена:
                  {{ convertCurrency(card.price) }}
                </UiCardDescription>
              </div>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ICard, IColumn } from "../components/kanban/kanban.types";
import { UseKanbanQuery } from '../components/kanban/useKanbanQuery';
import { convertCurrency } from '../utils/convertCurrency'
import dayjs from 'dayjs'

useSeoMeta({
  title: 'Home | CRM System'
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { data, isLoading, refetch } = UseKanbanQuery()


</script>