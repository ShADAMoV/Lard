<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <div
    label
    class="l-text"
  >
    {{ label }}
  </div>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-text {
        color: #041423;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
    }
</style>