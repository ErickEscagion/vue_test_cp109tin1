<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-title> {{ title.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>