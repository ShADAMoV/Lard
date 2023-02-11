<script setup>
import LStatus from '../Shared/LStatus.vue';
import LInn from '../Shared/LInn.vue';
import LContractType from '../Shared/LContractType.vue';
import LIdentification from '../Shared/LIdentification.vue';

defineProps({
    fullName: {
        type: String,
        required: true,
    },
    inn: {
        type: String,
        required: true,
    },
    contractType: {
        type: String,
        required: true,
        validator(value) {
            return ['ТД', 'ГПХ', 'СМЗ', 'Кандидат'].includes(value);
        },
    },
    address: {
        type: String,
        required: true,
    },
    dateBirth: {
      type: String,
      required: true,
      validator(value) {
            return /^([0-2][0-9]|3[0-1]).(0[0-9]|1[0-2]).(19[0-9][0-9]|20[0-9][0-9])$/.test(value);
        },
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: Object,
      required: true,
    },
    position: {
      type: Object,
      required: true,
    },
    status: {
      type: Object,
      required: true,
    },
    county: {
      type: Object,
      required: true,
    },
});
</script>

<template>
  <section class="l-employee">
    <h2 class="l-employee__name">
      {{ fullName }}
    </h2>
    <LInn
      :inn="inn"
    />
    <LContractType 
      :type="contractType"
    />
    <p class="l-employee__label">
      {{ position.name }}
    </p>
    <LIdentification 
      :id="county.id"
      :title="county.title"
      :icon="county.icon"
    />
    <p class="l-employee__label">
      {{ address }}
    </p>
    <p class="l-employee__label"> 
      Дата рождения: {{ dateBirth }}
    </p>
    <p class="l-employee__label"> 
      Возраст: {{ age }}
    </p>
    <p class="l-employee__label"> 
      Пол: {{ gender.title }}
    </p>
    <LStatus
      :label="status.description"
      :status="status.tag.color"
    />
  </section>
</template>