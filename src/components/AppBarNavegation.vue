<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue--text text--lighten-1"
        >
          <v-list-item to="/">
            <v-list-item-title>Pagina Inicial</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Generations">
            <v-list-item-title>Gerações</v-list-item-title>
          </v-list-item>

          <v-list-item to="/First">
            <v-list-item-title>Primeira Geração</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Second">
            <v-list-item-title>Segunda Geração</v-list-item-title>
          </v-list-item>

          <v-list-item to="/AllPokemons">
            <v-list-item-title>Todos Pokemons</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue lighten-1" dark max-height="60">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Pokemons</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-tab to="/">Pagina Inicial</v-tab>
      <v-tab to="/Generations">Gerações</v-tab>
      <v-tab to="/First">Primeira Geração</v-tab>
      <v-tab to="/Second">Segunda Geração</v-tab>
      <v-tab to="/AllPokemons">Todos Pokemons</v-tab>
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