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
    :class="`l-chip__${status}`"
    label
    class="l-chip"
  >
    {{ label }}
  </v-chip>
</template> 

<style lang="scss">
    // TODO: вынести цвета в переменные
    .l-chip {
        color: #FFFFFF;

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