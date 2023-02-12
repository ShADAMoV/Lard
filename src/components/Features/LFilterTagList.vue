<script setup>
import LFilterTag from '../Shared/LFilterTag.vue';
const tags = [
  {
    id: 0,
    title: 'Весь список',
    slug: 'Весь список',
    color: 'default',
  },
  {
    id: 1,
    title: 'Проблемные',
    slug: 'Пробл.',
    color: 'yellow',
  },  
  {
    id: 2,
    title: 'Критические',
    slug: 'Крит.',
    color: 'red',
  },
  {
    id: 3,
    title: 'Есть замечания',
    slug: 'Замеч',
    color: 'light-blue',
  },
  {
    id: 4,
    title: 'Выполнено',
    slug: 'Выполн',
    color: 'green',
  },
];
</script>

<template>
  <div class="l-filter-tag-list">
    <LFilterTag
      v-for="tag in tags"
      :key="tag.id"
      :title="tag.title"
      :color="tag.color"
    />
  </div>
</template>

<style lang="scss" scoped>
.l-filter-tag-list {
  margin-bottom: 20px;
  display: flex;
  column-gap: 10px;
}
</style>