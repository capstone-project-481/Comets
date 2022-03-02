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
        <!-- If the user is Authenticated show the username, my profile link and logout button-->
        <div v-if="isAuthenticated" class="flex items-center space-x-3">
          <a class="hover:text-gray-500">{{ loggedInUser.username }}</a>
          <nuxt-link to="/profile" class="hover:text-gray-500">{{ loggedInUser.username }}</nuxt-link>
          <!--Run logout method if clicked-->
          <a @click="logout" class="py-1 px-3 bg-yellow-400 text-yellow-900 rounded hover:text-yellow-200">Logout</a>
          <!--Snip cart button to display Snip Cart pane-->
          <button class="snipcart-checkout flex items-center">
            <Cart />
            <span class="snipcart-total-price ml-3 font-semibold text-sm text-pink"></span>
          </button>
        </div>
        <!-- If the user is not authenticated then show buttons to register and login-->
        <div v-else class="flex items-center space-x-3">
          <nuxt-link to="/login" class="hover:text-gray-500">Login</nuxt-link>
          <nuxt-link to="/register" class="py-1 px-3 bg-yellow-400 text-yellow-900 rounded hover:text-yellow-200">Register</nuxt-link>

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
