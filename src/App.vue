<template>
  <v-app>
    <v-system-bar color="blue darken-4"></v-system-bar>

    <app-bar-navegation />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <footer-bar />

    <bottom-navigation />
  </v-app>
</template>

<script>
import BottomNavigation from "./components/BottomNavigation.vue";
import AppBarNavegation from "./components/AppBarNavegation.vue";
import FooterBar from "./components/FooterBar.vue";
export default {
  components: { BottomNavigation, FooterBar, AppBarNavegation },
  name: "App",
};
</script>
