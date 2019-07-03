<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="'/'">VueApp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
       <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn title="">
      <router-link :to="'/about'">
      About
      </router-link>
    </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Footer,
  },
  data () {
    return {
      //
    }
  }
}
</script>
