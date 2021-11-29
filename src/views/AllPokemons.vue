<template>
  <div>
    <h1 align="center">{{titleAllPokemons}}</h1>
    <v-row>
      <v-col
        v-for="(title, count) in pokemons"
        :key="count"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <AllPokesCard :title="title"></AllPokesCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AllPokesCard from "../components/AllPokesCard.vue";
export default {
  components: { AllPokesCard },
  data(){
    return{
      titleAllPokemons: this.$store.getters.bitTitle
    }
  },
  computed: {
    pokemons(){
      return this.$store.state.pokemons;
    }
  },
  async created() {
    this.$store.dispatch("fetchPokemons")
  },
};
</script>
