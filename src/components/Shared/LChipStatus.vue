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
    :class="`l-chip-status__${status}`"
    label
    class="l-chip-status"
  >
    {{ label }}
  </v-chip>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-chip-status {
        color: #FFFFFF;
        font-weight: 500;
        font-size: 14px;
        line-height: 120%;

        &__done {
            background-color: #00AE5B;
        }

        &__comment {
            background-color: #00B6ED;
        }

        &__problem {
            background-color: #E2BD06;
        }

        &__critical {
            background-color: #E52E2E;
        }
    }
</style>