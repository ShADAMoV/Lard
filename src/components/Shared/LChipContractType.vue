<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <v-chip
    label
    class="l-chip-contract-type"
  >
    {{ label }}
  </v-chip>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-chip-contract-type {
        color: #FFFFFF;
        background-color: #00AE5B;
        font-weight: 600;
        font-size: 13px;
        line-height: 120%;
    }
</style>