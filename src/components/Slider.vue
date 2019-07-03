<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    data: () => ({
        items: [
            { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
            { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'}
        ]
    })
}
</script>

