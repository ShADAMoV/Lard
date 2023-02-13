<script setup>
import LSelect from '@/components/Shared/LSelect.vue';
import { useEmployeesStore } from '@/store/employees';
import { storeToRefs } from 'pinia';

const employeesStore = useEmployeesStore();

const { country, gender, position, contractType } = storeToRefs(employeesStore);

const countyOptions = [
  {
    id: 1,
    title: 'Россия',
  },
  {
    id: 2,
    title: 'Узбекистан',
  },
  {
    id: 3,
    title: 'Таджикистан',
  },
  ];
const genderOptions = [
  {
    id: 1,
    title: 'Мужской',
  },
  {
    id: 2,
    title: 'Женский',
  },
];
const jobOptions = [
  {
    id: 1,
    title: 'Промышленный альпинист',
  },
  {
    id: 2,
    title: 'Токарь',
  },
  {
    id: 3,
    title: 'Пекарь',
  },
];
const contractTypes = [
  {
    id: 0,
    title: 'ТД',
  },
  {
    id: 1,
    title: 'ГПХ',
  },
  {
    id: 2,
    title: 'СМЗ',
  },
  {
    id: 3,
    title: 'Кандидат',
  },
];
</script>
<template>
  <div class="l-filters">
    <h2 class="l-filters__title">
      Фильтр
    </h2>
    <v-row
      no-gutters
      class="l-filters__row"
    >
      <v-col>
        <LSelect
          v-model="country"
          label="Все страны"
          title="Гражданство"
          :options="countyOptions"
        />
      </v-col>
      <v-col>
        <LSelect
          v-model="gender"
          label="Без разницы"
          title="Пол"
          :options="genderOptions"
        />
      </v-col>
    </v-row>
    <v-row
      no-gutters
    >
      <v-col>
        <LSelect
          v-model="position"
          label="Без разницы"
          title="Должность"
          :options="jobOptions"
        />
      </v-col>
    </v-row>
    <v-checkbox
      v-for="contract of contractTypes"
      :key="contract.id"
      v-model="contractType"
      :label="contract.title"
      :value="contract.id"
      color="light-blue"
      hide-details
    />
    <hr class="l-filters__separator">
    <v-row>
      <v-col>
        <v-btn
          variant="flat"
          color="#00AE5B"
          class="l-filters__btn"
          block
        >
          Применить
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          variant="flat"
          color="#84909B"
          class="l-filters__btn"
          block
        >
          Очистить
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.l-filters {
  &__separator {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #dbe4ed;
    height: 1px;
    border: none;
  }

  &__row {
    column-gap: 20px;
  }

  &__title {
    font-weight: 600;
    font-size: 26px;
    line-height: 120%;
    color: #041423;
    margin-bottom: 20px;
  }

  &__hr {
    background-color: #dbe4ed;
    height: 1px;
    border: none;
  }

  &__btn {
    color: #FFFFFF;
    height: 46px;
  }
}
</style>
