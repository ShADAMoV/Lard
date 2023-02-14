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
      type: Number,
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
    country: {
      type: Object,
      required: true,
    },
});
</script>

<template>
  <section class="l-employee">
    <v-row
      class="l-employee__row"
      no-gutters
    >
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
    </v-row>
    <v-row
      class="l-employee__row"
      no-gutters
    >
      <LIdentification
        :id="country.id"
        :title="country.title"
        :icon="country.icon"
      />
      <div class="l-employee__separator" />
      <p class="l-employee__label">
        {{ address }}
      </p>
      <div class="l-employee__separator" />
      <p class="l-employee__label">
        Дата рождения: {{ dateBirth }}
      </p>
      <div class="l-employee__separator" />
      <p class="l-employee__label">
        Возраст: {{ age }}
      </p>
      <div class="l-employee__separator" />
      <p class="l-employee__label">
        Пол: {{ gender.title }}
      </p>
    </v-row>
    <v-row
      class="l-employee__row"
      no-gutters
    >
      <LStatus
        :label="status.description"
        :status="status.tag.color"
      />
    </v-row>
  </section>
</template>

<style lang='scss'>
  .l-employee {
    padding: 25px;
    background: #E7F3FF;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    &__name {
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      color: #2A358C;
    }

    &__row {
      column-gap: 15px;
      align-items: center;
    }

    &__separator {
      border: 1px solid #CEDAE5;
      height: 16px;
    }
  }
</style>
