<script setup>
import LEmployeesList from '../Features/LEmployeesList.vue';
import { useEmployeesStore } from '@/store/employees';
import { storeToRefs } from 'pinia';

const employeesStore = useEmployeesStore();

const { employees } = storeToRefs(employeesStore);
</script>

<template>
  <v-sheet class="l-employees">
    <LEmployeesList :employees="employees" />
  </v-sheet>
</template>

<style lang="scss">
.l-employees {
    background-color: #FFFFFF;
    padding: 30px 40px 60px;
}
</style>