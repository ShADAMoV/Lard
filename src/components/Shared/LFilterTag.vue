<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'reset',
    },
});

const colors = {
    'желтый': 'yellow',
    'красный': 'red',
    'голубой': 'light-blue',
    'зеленый': 'green',
    'reset': 'reset',
};
</script>

<template>
  <v-chip
    :class="`l-filter-tag--${colors[color.toLowerCase()]}`"
  >
    {{ title }}
  </v-chip>
</template>

<style lang="scss" scoped>
    [class*='l-filter-tag--'] {
        cursor: pointer;
    }
    
    .l-filter-tag {

        &--reset {
            background: #B0BCC7;
            border: 1px solid #B0BCC7;
            font-size: 14px;
            line-height: 120%;
            color: #FFFFFF;
        }

        &--red {
            border: 1px solid #E52E2E;
            background-color: #FFF8F8;
            font-size: 14px;
            line-height: 120%;
            color: #E52E2E;
        }

        &--yellow {
            border: 1px solid #E2BD06;
            background-color: #FFFDF1;;
            font-size: 14px;
            line-height: 120%;
            color: #E2BD06;
        }

        &--light-blue {
            border: 1px solid #00B6ED;
            background-color: #FFFDF1;
            font-size: 14px;
            line-height: 120%;
            color: #00B6ED;
        }

        &--green {
            border: 1px solid #00AE5B;
            background-color: #F2FFF9;
            font-size: 14px;
            line-height: 120%;
            color: #00AE5B;
        }
    }
</style>