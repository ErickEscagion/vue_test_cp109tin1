import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemons: [],
        titleAllPokemons: "Todos Pokemons",
        pokeCardsFirst: {
            title: ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Articuno", "Zaptos", "Moltres", "Mewtwo"],
            type: ["Eletrico", "Grama", "Fogo", "Agua", "Gelo", "Eletrico", "Fogo", "Psiquico"],
            url: [
                require("@/assets/first/pikachu.png"),
                require("@/assets/first/bulba.png"),
                require("@/assets/first/char.png"),
                require("@/assets/first/squi.png"),
                require("@/assets/first/artic.png"),
                require("@/assets/first/zaptos.png"),
                require("@/assets/first/moltres.png"),
                require("@/assets/first/mewtwo.png")
            ],
            desc: [
                "Pikachu , é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red and Blue, e foi criado por Satoshi Tajiri. Originalmente criado como um personagem secundário, Pikachu tornou-se o mascote do universo Pokémon depois de ter sido escolhido como um dos personagens principais na adaptação televisiva do jogo, ao lado de seu treinador Ash Ketchum. Ele também é considerado o Pokémon mais popular da franquia. Geralmente descrito como um rato elétrico, Pikachu foi criado pelo estúdio Game Freak e desenhado por Ken Sugimori. Ele foi criado juntamente com a sua evolução, Raichu; a partir da segunda geração, ele também passou a ter uma pré-evolução, o Pichu. Pikachu é do tipo elétrico e ocupa a 25ª posição na Pokédex, a enciclopédia que lista as diferentes espécies de Pokémon. Pikachu é mundialmente famoso sendo considerado um ícone kawaii, e como um equivalente japonês do Mickey Mouse, sendo parodiado e aparecido em outras séries de animação ocidentais como Os Simpsons e Drawn Together.",
                "Bulbasaur , chamado de Bulbasauro em português, é uma espécie fictícia pertencente à franquia Pokémon da Nintendo. Apareceu pela primeira vez em 1996 nos jogos Pocket Monsters Red & Green, levados ao ocidente como Pokémon Red & Blue. É um dos iniciais de Kanto, junto com Charmander, do tipo fogo, e Squirtle, do tipo água. Bulbasaur é dos tipos Planta e Veneno, notoriamente percebível por conta da grande planta em suas costas e de sua coloração verde-água. Sua classificação na Pokédex Nacional, Pokédex que merge todos os Pokémon de todas as regiões em uma, é #001. Bulbasaur é um dos Pokémon mais famosos de todos os tempos, tendo ganhado diversos brinquedos, pelúcias, fichas, cartas de TCG e até mesmo uma moeda comemorativa na ilha de Niue.",
                "Charmander , conhecido como Hitokage (ヒトカゲ?) no Japão, é um espécie de pokémon da franquia Pokémon da Nintendo e da Game Freak. Criado por Atsuko Nishida, Charmander apareceu pela primeira vez no videogame Pokémon Red e Blue e subsequentes, mais tarde aparecendo em vários jogos da franquia. O fim da cauda de um Charmander é aceso com uma chama, a chama muda de tamanho conforme sua saúde física e as emoções do personagem. Charmander evolui para Charmeleon e, em seguida, para Charizard.",
                "Squirtle (Japonês: ゼニガメ Zenigame) é um Pokémon do tipo Água, categorizado como Pokémon Tartaruguinha e introduzido na Primeira Geração. É um dos três Pokémon iniciais da região de Kanto.",
                "Articuno é um pokémon pássaro lendário que pode controlar o gelo. O bater de suas asas arrepia o ar. Como resultado, é dito que quando este Pokémon voa, a neve cairá.",
                "Zapdos é um pokémon pássaro lendário que tem a capacidade de controlar a eletricidade. Geralmente vive em nuvens tempestuosas. O Pokémon ganha poder se for atingido por raios.",
                "Moltres é um pokémon pássaro lendário que tem a capacidade de controlar o fogo. Se este Pokémon for ferido, diz-se que ele mergulha seu corpo no magma derretido de um vulcão para se queimar e se curar.",
                "Mewtwo o melhor lendario da primeira geração!"
            ]
        },
        pokeCardsSecond: {
            title: ["Chikorita", "Totodile ", "Cyndaquil"],
            type: ["Grama", "Agua", "Fogo"],
            url: [
                require("@/assets/second/chic.png"),
                require("@/assets/second/tot.png"),
                require("@/assets/second/cin.png")
            ],
            desc: [
                "Chikorita é um pokemon de Grama da segunda geração",
                "Totodile é um pokemon de Agua da segunda geração",
                "Cyndaquil é um pokemon de Fogo da segunda geração"
            ]
        }

    },
    mutations: {
        SET_POKEMONS(state, payload) {
            state.pokemons = payload
        }
    },
    actions: {
        fetchPokemons() {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")
                .then((response) => {
                    const payload = response.data.results
                    this.commit('SET_POKEMONS', payload)
                })
                .catch((error) => console.log(error));
        }

    },
    getters: {
        bitTitle(state) {
            return state.titleAllPokemons.toUpperCase()
        }
    }
})