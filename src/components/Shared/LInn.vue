<script setup>
defineProps({
    inn: {
        type: String,
        required: true,
    },
});
</script>

<template>
  <v-chip
    label
    class="l-inn"
  >
    ИНН {{ inn }}
  </v-chip>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-inn {
        color: #84909B;
        background-color: #FFFFFF;
        font-weight: 500;
        font-size: 13px;
        line-height: 120%;
    }
</style>