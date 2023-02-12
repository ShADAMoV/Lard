<script setup>
import LFilterTag from '../Shared/LFilterTag.vue';
import { useEmployeesStore } from '@/store/employees';
import { storeToRefs } from 'pinia';

const employeesStore = useEmployeesStore();
const { tags } = storeToRefs(employeesStore);
const { resetTags } = employeesStore;

const tagList = [
  {
    id: 0,
    title: 'Проблемные',
    slug: 'Пробл.',
    color: 'yellow',
  },
  {
    id: 1,
    title: 'Критические',
    slug: 'Крит.',
    color: 'red',
  },
  {
    id: 2,
    title: 'Есть замечания',
    slug: 'Замеч',
    color: 'light-blue',
  },
  {
    id: 3,
    title: 'Выполнено',
    slug: 'Выполн',
    color: 'green',
  },
];
</script>

<template>
  <div class="l-filter-tag-list">
    <LFilterTag
      title="Весь список"
      @click="resetTags"
    />
    <v-chip-group
      v-model="tags"
      multiple
    >
      <LFilterTag
        v-for="tag in tagList"
        :id="tag.id"
        :key="tag.id"
        :title="tag.title"
        :color="tag.color"
      />
    </v-chip-group>
  </div>
</template>

<style lang="scss" scoped>
.l-filter-tag-list {
  margin-bottom: 20px;
  display: flex;
  column-gap: 10px;
  align-items: center;
}
</style>
