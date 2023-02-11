<script setup>
import LEmployee from '../Features/LEmployee.vue';

const employee = {
  full_name: 'Sadnev Adam Solomonovich',
  inn: '1234567890',
  type_contract : {
    id: 1,
    title: 'Самозанятый',
    slug: 'СМЗ',
  },
  address: 'г.Санкт-Петербург',
  date_birth: '11.07.2000',
  age: 22,
  gender: {
    id: 1,
    title: 'мужской',
    slug: 'муж.',
  },
  position: {
    id: 1,
    name: 'альпинист',
  },
  status: {
    tag_id: 1,
    tag: {
      id: 1,
      title: 'Проблемы',
      slug: 'пробл',
      color: 'Оранжевый',
    },
    description: 'БОЧЁК ПОТИК',
  },
  county: {
    id: 1,
    icon: '',
    title: 'Россия',
    slug: 'RU',
  },
};
</script>

<template>
  <LEmployee 
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