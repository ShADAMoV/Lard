<script setup>
import { useModelWrapper } from '@/composables/modelWrapper';

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
});

const emit = defineEmits([
    'update:modelValue',
]);

const search = useModelWrapper(props, emit);
</script>


<template>
  <v-text-field
    v-model="search"
    class="l-employees-search"
    label="Поиск сотрудника"
    hint="Например: Иванов Иван Иванович"
    :rules="rules"
    hide-details="auto"
    append-inner-icon="mdi-magnify"
    persistent-hint
    variant="solo"
  />
</template>

<style lang="scss">
    .l-employees-search {
        .v-field {
            border: 1px solid #E0EBEF;
            background-color: #E8F1F4;
        }
    }
</style>