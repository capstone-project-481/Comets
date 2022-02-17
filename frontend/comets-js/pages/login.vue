<template>
   <section class="section flex justify-center items-center">
      <div class="bg-gray-100 shadow-2xl p-6 rounded">
         <div class="columns">
            <div class="column is-4 is-offset-4">
               <h2 class="text-center text-2xl mb-4">Welcome back!</h2>
               <Notification v-if="error" type="danger" :message="error" />
               <form method="post" @submit.prevent="login">
                  <div class="field mb-2">
                     <label class="label">Email</label>
                     <div class="control">
                        <input
                           v-model="email"
                           type="email"
                           class="input w-full rounded-sm pl-1"
                           name="email"
                           placeholder="user@comets.js"
                           />
                     </div>
                  </div>
                  <div class="field mb-6">
                     <label class="label">Password</label>
                     <div class="control">
                        <input
                           v-model="password"
                           type="password"
                           class="input w-full rounded-sm pl-1"
                           name="password"
                           placeholder="password"
                           />
                     </div>
                  </div>
                  <div class="control">
                     <button type="submit" class="bg-blue-400 py-1 w-full rounded-sm font-medium">
                     Login
                     </button>
                  </div>
               </form>
               <div style="margin-top: 20px">
                  <p class="font-medium">
                     Don't have an account?
                     <nuxt-link to="/register" class="text-blue-600">Register</nuxt-link>
                  </p>
                  <p class="font-medium">
                     <nuxt-link to="/forgot-password" class="text-blue-600">Forgot Password?</nuxt-link>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import Notification from "~/components/Notification";

export default {
    components: {
        Notification,
    },
    //Get the email and password data from input fields
    data(){
        return {
            email: "",
            password: "",
            error: null,
        };
    },
    //If the user is logged in block access to login page
    middleware: "guest",
    methods: {
        async login() {
            this.error = null;
            try {
               //Post this information over to Strapi
               await this.$auth.loginWith("local", {
                  data: {
                     identifier: this.email,
                     password: this.password,
                  },
               });
               this.$router.push("/");
            } catch(e){
               this.error = e.response.data
            }
        },
    },
}
</script>
