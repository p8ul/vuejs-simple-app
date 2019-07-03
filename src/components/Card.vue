<template>
    <v-container>
        <v-layout align-center>
          <v-flex xs12 sm3 order-md3 order-sm2 pa-2 v-for="(item, i) in items" :key=i>
            <v-card dark tile flat color="orange lighten-1" hover>
              <v-layout column align-center>
                  <v-avatar size='72' class="my-3" >
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                  </v-avatar>
                  <v-card-text class="headline text-md-center py-0">Super Mario</v-card-text>
                  <v-card-text class="text-md-center pt-1 pb-4">Project Manager</v-card-text>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
    data: () => ({
        items: [
            {}, {},
            {}, {},
        ]
    })
}
</script>

