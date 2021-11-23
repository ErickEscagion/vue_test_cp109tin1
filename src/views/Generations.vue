<template>
  <div>
    <h1 align="center">Gerações</h1>
    <v-timeline>
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${year.color}--text`"
            v-text="year.year"
          ></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
            {{year.title}}
          </h2>
          <div>
            <p>{{year.text}}</p>{{textAll}}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    textAll : " - Historia do jogo e bla bla bla bla bla bla bla bla bla bla bla bla bla bla - Historia do Anime e bla bla bla bla bla bla bla bla bla bla bla bla bla bla - tudo vinculado a geração corrente",
    years: [
      {
        color: "cyan",
        year: "1996",
        title: "Geração I",
        text : "Red, Green, Blue e Yellow"
      },
      {
        color: "green",
        year: "1999",
        title: "Geração II",
        text : "Gold, Silver e Crystal"
      },
      {
        color: "pink",
        year: "2002",
        title: "Geração III",
        text : "Ruby, Sapphire e Emerald"
      },
      {
        color: "amber",
        year: "2006",
        title: "Geração IV",
        text : "Diamond, Pearl e Platinum"
      },
      {
        color: "orange",
        year: "2010",
        title: "Geração V",
        text : "Black, White, Black 2 e White 2"
      },
      {
        color: "cyan",
        year: "2013",
        title: "Geração VI",
        text : "X e Y"
      },
      {
        color: "green",
        year: "2016",
        title: "Geração VII",
        text : "Sun e Moon / Ultra Sun e Ultra Moon"
      },
      {
        color: "pink",
        year: "2019",
        title: "Geração VIII",
        text : "Sword e Shield "
      }
    ],
  }),
};
</script>