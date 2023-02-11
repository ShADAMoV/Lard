<script setup>
import LEmployeesList from '../Features/LEmployeesList.vue';
import LEmployeesSearch from '../Features/LEmployeesSearch.vue';
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
    <LEmployeesSearch
      v-model="searchEmployees"
      class="l-employees__search"
    />
    <hr class="l-employees__separator">
    <LEmployeesList
      :employees="filteredEmployees"
      class="l-employees__list"
    />
  </v-sheet>
</template>

<style lang="scss">
.l-employees {
    background-color: #FFFFFF;
    padding: 30px 0 60px;

    &__search {
      margin-bottom: 30px;
      padding-left: 40px;
      padding-right: 40px;
    }

    &__separator {
      background-color: #DBE4ED; 
      height: 1px; 
      border: none;
    }

    &__list {
      margin-top: 30px;
      padding-left: 40px;
      padding-right: 40px;
    }
}
</style>