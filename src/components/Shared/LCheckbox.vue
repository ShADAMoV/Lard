<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <v-checkbox
    :label="label"
  />
</template>
