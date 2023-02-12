<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        validator(value) {
            return ['зеленый', 'голубой', 'желтый', 'красный'].includes(value);
        },
    },
});

const classFromColor = {
    'зеленый': 'green',
    'голубой': 'light-blue',
    'желтый': 'yellow',
    'красный': 'red',
};
</script>

<template>
  <v-chip
    :class="`l-status--${classFromColor[status.toLowerCase()]}`"
    label
    class="l-status"
  >
    {{ label }}
  </v-chip>
</template> 

<style lang="scss" scoped>
    // TODO: вынести цвета в переменные
    .l-status {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;

        &--green {
            background-color: #00AE5B;
        }

        &--light-blue {
            background-color: #00B6ED;
        }

        &--yellow {
            background-color: #E2BD06;
        }

        &--red {
            background-color: #E52E2E;
        }
    }
</style>