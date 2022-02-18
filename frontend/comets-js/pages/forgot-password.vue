<template>
   <section class="section flex justify-center items-center">
      <div class="bg-gray-100 shadow-2xl p-6 rounded">
         <div class="columns">
            <div class="column is-4 is-offset-4">
               <h2 class="text-center text-2xl mb-4">Forgot Password</h2>
               <Notification v-if="success" type="success" :message="success" />
               <Notification v-if="error" type="danger" :message="error" />
               <form v-if="!success" method="post" @submit.prevent="forgotPassword">
                  <div class="field mb-2">
                     <label class="label">Email</label>
                     <div class="control">
                        <input
                           v-model="email"
                           type="email"
                           class="input w-full rounded-sm pl-1"
                           name="email"
                           placeholder="user@comets.js"
                           required
                           />
                     </div>
                  </div>
                  <div class="control">
                     <button type="submit" class="bg-blue-400 py-1 w-full rounded-sm font-medium">
                     Email me a reset link
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import Notification from "~/components/Notification";
export default {
    middleware: "guest",
    components: {
        Notification,
    },
    data(){
        return {
            email: "",
            success: null,
            error: null,
        };
    },
    methods: {
        async forgotPassword(){
            try{
                await this.$axios.post("api/auth/forgot-password", {
                    email: this.email,
                });
                this.error = null;
                this.success = `A reset password link has been sent to your email account. Please click on the link to complete the password reset.`;
            } catch (e){
                //I set the error message to be the same as success message to slow down an attacker
                this.error = `A reset password link has been sent to your email account. Please click on the link to complete the password reset.`;
            }
        },
    },
};
</script>
