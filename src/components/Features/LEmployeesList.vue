<script setup>
import LEmployee from '../Features/LEmployee.vue';

defineProps({
  employees: {
    type: Array,
    required: true,
  },
});

</script>

<template>
  <LEmployee
    v-for="employee in employees"
    :key="employee.inn" 
    :full-name="employee.full_name"
    :inn="employee.inn"
    :contract-type="employee.type_contract.slug"
    :address="employee.address"
    :date-birth="employee.date_birth"
    :age="employee.age"
    :gender="employee.gender"
    :position="employee.position"
    :status="employee.status"
    :county="employee.county"
  />
</template>