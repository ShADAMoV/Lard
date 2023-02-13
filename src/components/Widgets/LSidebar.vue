<script setup>
import LFilters from '@/components/Features/LFilters.vue';
import LEmployeeAdd from '@/components/Features/LEmployeeAdd.vue';
</script>
<template>
  <v-sheet class="l-sidebar">
    <LEmployeeAdd />
    <hr class="l-sidebar__separator">
    <LFilters />
  </v-sheet>
</template>

<style lang="scss">
.l-sidebar {
    background-color: #FFFFFF;
    padding: 30px;

  &__separator {
    margin: 30px -30px;
    background-color: #dbe4ed;
    height: 1px;
    border: none;
  }
}
</style>
