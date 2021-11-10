<template >
  <v-bottom-navigation
    grow
    :value="value"
    color="blue"
    max-height="10vh"
    background-color="#f5f5f5"
  >
    <v-btn>
      <span>Icone 1</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Icone 2</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>Icone 3</span>

      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation",

  data: () => ({
    value: 1,
  }),
};
</script>