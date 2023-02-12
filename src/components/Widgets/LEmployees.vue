<script setup>
import LEmployeesList from '../Features/LEmployeesList.vue';
import LEmployeesSearch from '../Features/LEmployeesSearch.vue';
import LFilterTagList from '../Features/LFilterTagList.vue';
import { useEmployeesStore } from '@/store/employees';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

const employeesStore = useEmployeesStore();

const { employees } = storeToRefs(employeesStore);

const searchEmployees = ref('');

const filteredEmployees = computed(() => employees.value.filter((employee) => employee.full_name.toLowerCase().includes(searchEmployees.value.toLowerCase())));
</script>

<template>
  <v-sheet class="l-employees">
    <LEmployeesSearch v-model="searchEmployees" class="l-employees__search" />
    <hr class="l-employees__separator" />
    <h1 class="l-employees__title">Список сотрудников</h1>
    <LFilterTagList class="l-employees__filter" />
    <LEmployeesList :employees="filteredEmployees" class="l-employees__list" />
  </v-sheet>
</template>

<style lang="scss" scoped>
.l-employees {
  background-color: #ffffff;
  padding: 30px 40px 60px;

  &__search {
    margin-bottom: 30px;
  }

  &__separator {
    background-color: #dbe4ed;
    height: 1px;
    border: none;
    margin: 0 -40px;
  }

  &__title {
    margin-top: 30px;
    font-weight: 600;
    font-size: 26px;
    line-height: 120%;
    color: #041423;
  }

  &__filter {
    margin-top: 20px;
  }

  &__list {
    margin-top: 20px;
  }
}
</style>