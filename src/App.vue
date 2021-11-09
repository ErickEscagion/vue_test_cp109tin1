<template>
  <v-app>
    <v-system-bar color="blue darken-4"></v-system-bar>

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

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer color="blue darken-4" dark>
      <v-col class="text-center" cols="12">
        <strong>Erick Escagion</strong> @ {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>

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
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    value: 1,
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
