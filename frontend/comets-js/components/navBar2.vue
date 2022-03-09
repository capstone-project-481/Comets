<!-- NavBar -->
<template>
  <nav class= "bg-gray-200">
    <div class="px-8 mx-auto">
      <div class="flex justify-between">
         <div class="flex space-x-4">

          <!-- logo -->
          <div>
            <nuxt-link to="/" class="flex items-center py-3 text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="font-mono font-bold text-lg">Comets</span>
            </nuxt-link>
          </div>

          <!-- primaryNav to add more sections like ABOUT or CONTACT -->
          <div>
            <a href=""></a>      
          </div>
        </div> 

        <!-- secondaryNav -->
        <div class="flex items-center space-x-3">
          <button class="snipcart-customer-signin py-1 px-3 rounded hover:text-gray-900">My Account</button>
          <!--Snip cart button to display Snip Cart pane-->
          <button class="snipcart-checkout flex items-center">
            <Cart />
            <span class="snipcart-total-price ml-3 font-semibold text-sm text-pink"></span>
          </button>
        </div>
      </div>
    </div>
</nav>
<!-- mobile menu -->

</template>

<script>
import Cart from "./icons/cart.vue";
import { mapGetters } from "vuex";
export default {
  //Define isAuthenticated and loggedInUser getters these are created in store/index.js
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  //Handles logging out of the account
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  },
  components: {
    Cart,
  },
};
</script>

<style>
</style>
