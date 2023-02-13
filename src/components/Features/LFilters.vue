<script setup>
import LSelect from '@/components/Shared/LSelect.vue';
import LCheckbox from '@/components/Shared/LCheckbox.vue';

const countyOptions = ['Все страны', 'Россия', 'Узбекистан', 'Таджикистан'];
const genderOptions = ['Без разницы', 'Мужской', 'Женский'];
const jobOptions = ['Все должности', 'Промышленный альпинист', 'Токарь', 'Пекарь'];
const contractTypes = ['ТД', 'ГПХ', 'СМЗ', 'Кандидат'];
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
          label="Все страны"
          title="Гражданство"
          :options="countyOptions"
        />
      </v-col>
      <v-col>
        <LSelect
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
          label="Без разницы"
          title="Должность"
          :options="jobOptions"
        />
      </v-col>
    </v-row>
    <LCheckbox
      v-for="(contract, index) of contractTypes"
      :key="index"
      :label="contract"
      color="light-blue"
      hide-details
      class=""
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
