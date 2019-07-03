<template>
    <v-app>
        <v-content>
            <Slider />
            <Card />
        </v-content>
    </v-app>
</template>

<script>
import Slider from '../components/Slider';
import Card from '../components/Card';

export default {
  name: 'App',
  components: {
    Slider,
    Card,
  },
  data () {
    return {
      //
    }
  }
}
</script>

