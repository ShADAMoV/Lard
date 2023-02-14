<script setup>
import LSelect from '@/components/Shared/LSelect.vue';
import { ref, watch } from 'vue';
import { country } from '@/data/country';
import { gender } from '@/data/gender';
import { job } from '@/data/job';
import { types } from '@/data/contract';

const props = defineProps({
  filters: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:filters']);


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
          :options="country"
        />
      </v-col>
      <v-col>
        <LSelect
          v-model="filters.gender"
          label="Без разницы"
          title="Пол"
          :options="gender"
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
          :options="job"
        />
      </v-col>
    </v-row>
    <v-checkbox
      v-for="contractType of types"
      :key="contractType.id"
      v-model="filters.contractType"
      :label="contractType.title"
      :value="contractType.id"
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
