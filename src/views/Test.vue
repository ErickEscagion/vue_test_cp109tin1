
<template >
  <div >
    <v-card elevation="2">
      <h1 align="center">Rayquaza</h1>
      <p>
        Rayquaza is a large, green, serpentine Pokémon that also resembles a
        missile. It has red-tipped, rudder-like wings on its shoulders and down
        its body, and similarly patterned fins on the tip of its tail. Yellow
        ring-like symbols run across the length of Rayquaza's body and it has an
        additional yellow ring on top of its head. Rayquaza has two limbs with
        three-clawed hands, and two long, flat, horn-like structures on its
        head, with two shorter horns along its jawline. It has small, yellow
        eyes with black pupils, prominent pink gums, and two discernible fangs
        in its upper jaw.
      </p>
      <div class="d-flex flex-column justify-space-between align-center">
        <v-img
          :aspect-ratio="16 / 9"
          :width="width"
          src="../assets/rayquaza.png"
        ></v-img>

        <v-slider
          v-model="width"
          class="align-self-stretch"
          min="200"
          max="900"
          step="1"
        ></v-slider>
      </div>
    </v-card>
    <br/>
    <v-card elevation="2" align="center">
      <h1 >Charizard Shiny</h1>
      <v-img
        max-height="600"
        max-width="600"
        src="../assets/charizard.png"
      ></v-img>

      <p>
        Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame.
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    width: 300,
  }),
};
</script>
