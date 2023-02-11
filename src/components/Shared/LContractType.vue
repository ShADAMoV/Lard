<script setup>
defineProps({
    type: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <v-chip
    class="l-contract-type"
  >
    {{ type }}
  </v-chip>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-contract-type {
        color: #FFFFFF;
        background-color: #00AE5B;
        font-weight: 600;
        font-size: 13px;
        line-height: 120%;
    }
</style>