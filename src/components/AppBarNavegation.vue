<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--lighten-1"
        >
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/About">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Test">
            <v-list-item-title>Pokemons</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue lighten-1" dark max-height="60">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My site Vue</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppBarNavegation",

  data: () => ({
    drawer: false,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>