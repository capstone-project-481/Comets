<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <span class="emoji"> 🏠 </span>
    </nuxt-link>

    <!-- If the user is Authenticated show the username, my profile link and logout button-->
    <div v-if="isAuthenticated">
      <a>{{ loggedInUser.username }}</a>
      <nuxt-link to="/profile">My Profile</nuxt-link>
      <!--Run logout method if clicked-->
      <a @click="logout">Logout</a>
    </div>
    <!-- If the user is not authenticated then show buttons to register and login-->
    <div v-else>
      <nuxt-link to="/register">Register</nuxt-link>
      <nuxt-link to="/login">Login</nuxt-link>
    </div>

    <!--Snip cart button to display Snip Cart pane-->
    <button class="snipcart-checkout flex items-center">
      <Cart />
      <span class="snipcart-total-price ml-3 font-semibold text-sm text-pink"></span>
    </button>

  </div>
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
.emoji {
  font-size: 45px;
}
</style>