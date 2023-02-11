<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <p
    label
    class="l-text-name"
  >
    {{ label }}
  </p>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-text-name {
        color: #2A358C;
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
    }
</style>