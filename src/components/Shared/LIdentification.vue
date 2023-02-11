<script setup>
import { computed } from 'vue';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      validator(value) {
        return ['Россия', 'Таджикистан', 'Узбекистан'].includes(value);
      },
    },
});

const slugValidator = {
  'Россия': 'RU',
  'Таджикистан': 'TJ',
  'Узбекистан': 'UZ',
};

const slug = computed(() => slugValidator[props.title]);
</script>


<template>
  <p
    class="l-identification"
  >
    {{ icon }} {{ slug }} {{ id }}
  </p>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-identification {
        color: #041423;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
    }
</style>