<template>
  <div>
    <h1 align="center">Segunda Geração</h1>
    <v-row>
      <v-col 
        v-for="title,count in myPokeCards.title" 
        :key="count" 
        cols="12" 
        sm="6"
        md="4"
        xs="2"
      >
        <PokeCard :title="title" :type="myPokeCards.type[count]" :desc="myPokeCards.desc[count]" :url="myPokeCards.url[count]"></PokeCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PokeCard from "../components/PokeCard.vue";
export default {
  components: { PokeCard },
  computed:{
    myPokeCards(){
      return this.$store.state.pokeCardsSecond
    }
  }
};
</script>
