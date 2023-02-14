<script setup>
import LFilters from '@/components/Features/LFilters.vue';
import LEmployeeAdd from '@/components/Features/LEmployeeAdd.vue';
import LEmployeeDialog from '@/components/Features/LEmployeeDialog.vue';
import { useEmployeesStore } from '@/store/employees';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const employeesStore = useEmployeesStore();
const { filters, employees } = storeToRefs(employeesStore);
const isOpenDialog = ref(false);

const createEmployee = (employee) => {
  employees.value.unshift(employee);
};

</script>
<template>
  <v-sheet class="l-sidebar">
    <LEmployeeAdd
      @click="isOpenDialog = !isOpenDialog"
    />
    <hr class="l-sidebar__separator">
    <LFilters
      v-model:filters="filters"
    />
    <LEmployeeDialog
      v-model:dialog="isOpenDialog"
      @create:employee="createEmployee"
    />
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
