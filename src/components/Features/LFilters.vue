<script setup>
import LSelect from '@/components/Shared/LSelect.vue';
import { ref, watch } from 'vue';

const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:filters']);

const countryOptions = [
  {
    id: 0,
    title: 'Россия',
  },
  {
    id: 1,
    title: 'Узбекистан',
  },
  {
    id: 2,
    title: 'Таджикистан',
  },
  ];
const genderOptions = [
  {
    id: 0,
    title: 'Мужской',
  },
  {
    id: 1,
    title: 'Женский',
  },
];
const jobOptions = [
  {
    id: 0,
    title: 'Промышленный альпинист',
  },
  {
    id: 1,
    title: 'Токарь',
  },
  {
    id: 2,
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

const filters = ref({ ...props.filters });

watch(
  () => props.filters,
  (newFilters) => {
    filters.value = { ...newFilters };
  },
  { deep: true },
);

const applyFilters = () => {
  emit('update:filters', { ...filters.value });
};
const resetFilters = () => {
  const filters = {
    country: null,
    gender: null,
    position: null,
    contractType: [],
  };

  emit('update:filters', filters);
};
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
          v-model="filters.country"
          label="Все страны"
          title="Гражданство"
          :options="countryOptions"
        />
      </v-col>
      <v-col>
        <LSelect
          v-model="filters.gender"
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
          v-model="filters.position"
          label="Без разницы"
          title="Должность"
          :options="jobOptions"
        />
      </v-col>
    </v-row>
    <v-checkbox
      v-for="contract of contractTypes"
      :key="contract.id"
      v-model="filters.contractType"
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
          @click="applyFilters"
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
          @click="resetFilters"
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
