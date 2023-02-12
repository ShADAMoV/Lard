<script setup>
import LFilterTag from '../Shared/LFilterTag.vue';

defineProps({
    filters: {
        type: Array,
        required: true,
    },
});
</script>

<template>
  <div class="l-employee-filter">
    <LFilterTag 
      v-for="filter in filters"
      :key="filter.id"
      :title="filter.title"
      :color="filter.color"
    />
  </div>
</template>

<style lang="scss" scoped>
    .l-employee-filter {
        margin-bottom: 20px;
        display: flex;
        column-gap: 10px;
    }
</style>