<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'default',
    validator(value) {
      return ['green', 'light-blue', 'yellow', 'red'].includes(value);
    },
  },
  id: {
    type: Number,
    required: false,
    default: 0,
  },
});
</script>

<template>
  <v-chip
    :class="`l-filter-tag--${color}`"
    class="l-filter-tag"
    :value="id"
    selected-class="active"
  >
    {{ title }}
  </v-chip>
</template>

<style lang="scss" scoped>
.l-filter-tag {
  cursor: pointer;

  &--default {
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
    transition: all 0.4s;

    &.active {
      background-color: #E52E2E;
      color: #FFFFFF;
    }
  }

  &--yellow {
    border: 1px solid #E2BD06;
    background-color: #FFFDF1;;
    font-size: 14px;
    line-height: 120%;
    color: #E2BD06;

    &.active {
      background-color: #E2BD06;
      color: #FFFFFF;
    }
  }

  &--light-blue {
    border: 1px solid #00B6ED;
    background-color: #FFFDF1;
    font-size: 14px;
    line-height: 120%;
    color: #00B6ED;

    &.active {
      background-color: #00B6ED;
      color: #FFFFFF;
    }
  }

  &--green {
    border: 1px solid #00AE5B;
    background-color: #F2FFF9;
    font-size: 14px;
    line-height: 120%;
    color: #00AE5B;

    &.active {
      background-color: #00AE5B;
      color: #FFFFFF;
    }
  }
}
</style>
