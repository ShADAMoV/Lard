<script setup>
import { useModelWrapper } from '@/composables/modelWrapper';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [null, Number, Object],
    required: true,
  },
  fieldTitle: {
    type: String,
    default: 'title',
    required: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const modelValue = useModelWrapper(props, emit);
</script>

<template>
  <div class="l-select">
    <h3 class="l-select__h3">
      {{ title }}
    </h3>
    <v-select
      v-model="modelValue"
      clearable
      :placeholder="label"
      :items="options"
      :item-title="fieldTitle"
      item-value="id"
      class="l-select__field"
      variant="solo"
      return-object
    />
  </div>
</template>

<style lang="scss">
.l-select {
  &__h3 {
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
    color: #041423;
    margin-bottom: 10px;
  }

  &__field {
    .v-field {
      border: 1px solid #E0EBEF;
      background-color: #E8F1F4;
    }
  }
}
</style>
