<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <p
    label
    region
    class="l-text-identification"
  >
    {{ region }} {{ label }}
  </p>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-text-identification {
        color: #041423;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
    }
</style>