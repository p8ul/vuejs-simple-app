<template>
    <v-footer height="auto">
      
      <v-responsive class="bg-black" :gradient="gradient"  height="auto">

<v-container>
<v-layout align-center justify-center>
          <strong class="subheading" style="font-size:21px!important">Get connected with us on social networks</strong>
  </v-layout>
  <v-layout align-center justify-center>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            dark
            class="mx-1"
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
  </v-layout>
   <v-layout align-center justify-center>
 <a href="https://google.com" style="text-decoration:none"><v-btn flat color="white">Privacy Policy</v-btn></a>
      <a href="https://google.com" style="text-decoration:none"><v-btn flat color="white">Contact Us</v-btn></a>
  </v-layout>
   <v-layout align-center justify-center>
   <strong class="body-1">Copyright © 2018 filetodrive.com</strong>
   </v-layout>
</v-container>
    </v-responsive>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
    gradient: 'to top, #1867c0, #5cbbf6',
    icons: ['thumb_up_alt', 'whatshot', 'party_mode', 'share'],
    rows: [
      {
        title: 'Company Name',
        children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      },
      {
        title: 'Products',
        children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
      },
      {
        title: 'Useful Links',
        children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
      }
    ]
  })
}
</script>

