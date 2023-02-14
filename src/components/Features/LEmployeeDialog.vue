<script setup>
import { useModelWrapper } from '@/composables/modelWrapper';
import LSelect from '@/components/Shared/LSelect.vue';
import { country } from '@/data/country';
import { gender } from '@/data/gender';
import { job } from '@/data/job';
import { types } from '@/data/contract';
import { status } from '@/data/status';
import { reactive } from 'vue';

const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:dialog', 'create:employee']);

const dialog = useModelWrapper(props, emit, 'dialog');

const rules = {
  cyrillicValidation: (value) => {
    const pattern = /^[а-яА-ЯёЁ\s]+$/;
    return pattern.test(value) || 'Используйте кириллицу';
  },
  address: (value) => {
    const pattern = /^[а-яА-ЯёЁ., ]+$/;
    return pattern.test(value) || 'Неверный адрес';
  },
  gender: (value) => gender.includes(value) || 'Укажите пол',
  country: (value) => country.includes(value) || 'Укажите страну',
  inn: (value) => {
    const pattern = /^[0-9]+$/;
    return pattern.test(value)  || 'Только цифры';
  },
  innCounter: (value) => value.length <= 10 || 'Длина не больше 10 символов',
  position: (value) => job.includes(value) || 'Укажите должность',
  contractType: (value) => types.includes(value) || 'Укажите тип договора',
  status: (value) => status.includes(value) || 'Выберите статус',
};

const employee = reactive({
  full_name: '',
  age: '',
  date_birth: '',
  gender: null,
  gender_id: null,
  country: null,
  country_id: null,
  address : '',
  inn: '',
  position: null,
  position_id: null,
  type_contract: null,
  type_contract_id: null,
  status: {
    tag_id: null,
    tag: null,
    description: '',
  },
});

const sendData = () => {
  emit('create:employee', employee);
  dialog.value = false;
};
</script>

<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      width="1024"
    >
      <v-card class="l-employee-dialog">
        <v-card-title>
          <span class="text-h5">Добавить сотрудника</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="employee.full_name"
                  label="ФИО*"
                  required
                  variant="solo"
                  :rules="[rules.cyrillicValidation]"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="employee.age"
                  label="Возраст*"
                  required
                  variant="solo"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="employee.date_birth"
                  label="Дата рождения*"
                  required
                  type="date"
                  variant="solo"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <LSelect
                  v-model="employee.gender"
                  title="Пол*"
                  :options="gender"
                  label="Выберите пол"
                  required
                  :rules="[rules.gender]"
                  @update:model-value="employee.gender_id = employee.gender.id"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <LSelect
                  v-model="employee.country"
                  title="Гражданство*"
                  :options="country"
                  label="Выберите страну"
                  required
                  :rules="[rules.country]"
                  @update:model-value="employee.country_id = employee.country.id"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="employee.address"
                  label="Адрес*"
                  required
                  variant="solo"
                  :rules="[rules.address]"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="employee.inn"
                  label="ИНН*"
                  required
                  variant="solo"
                  :rules="[rules.inn, rules.innCounter]"
                  counter
                  maxlength="10"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <LSelect
                  v-model="employee.position"
                  title="Должность*"
                  :rules="[rules.position]"
                  :options="job"
                  label="Выберите должность"
                  required
                  field-title="name"
                  @update:model-value="employee.position_id = employee.position.id"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <LSelect
                  v-model="employee.type_contract"
                  title="Тип договора*"
                  :rules="[rules.contractType]"
                  :options="types"
                  label="Выберите тип договора"
                  required
                  @update:model-value="employee.type_contract_id = employee.type_contract.id"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="employee.status.description"
                  label="Описание статуса*"
                  required
                  variant="solo"
                  :rules="[rules.cyrillicValidation]"
                  class="l-employee-dialog__field-width-select"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <LSelect
                  v-model="employee.status.tag"
                  title="Тип статуса*"
                  :rules="[rules.status]"
                  :options="status"
                  label="Выберите статус"
                  required
                  @update:model-value="employee.status.tag_id = employee.status.tag.id"
                />
              </v-col>
            </v-row>
          </v-container>
          <small class="l-employee-dialog__small">Поля, отмеченные "*" - обязательны </small>
        </v-card-text>
        <v-card-actions class="l-employee-dialog__actions">
          <v-spacer />
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Закрыть
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="sendData"
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style lang="scss">
.l-employee-dialog {
  .v-card-title {
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 40px;
  }

  &__small {
    padding-left: 16px;
    padding-right: 16px;
  }

  .v-field {
    border: 1px solid #E0EBEF;
    background-color: #E8F1F4;
  }

  .v-card-actions {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;
  }

  &__field-width-select {
    padding-top: 28px;
  }
}
</style>
