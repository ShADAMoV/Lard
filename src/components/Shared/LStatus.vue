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
            return ['done', 'comment', 'problem', 'critical'].includes(value);
        },
    },
});
</script>

<template>
  <v-chip
    :class="`l-status--${status}`"
    class="l-status"
  >
    {{ label }}
  </v-chip>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-status {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;

        &--done {
            background-color: #00AE5B;
        }

        &--comment {
            background-color: #00B6ED;
        }

        &--problem {
            background-color: #E2BD06;
        }

        &--critical {
            background-color: #E52E2E;
        }
    }
</style>