<template>
   <section class="section flex justify-center items-center">
      <div class="bg-gray-100 shadow-2xl p-6 rounded">
         <div class="columns">
            <div class="column is-4 is-offset-4">
               <h2 class="text-center text-2xl mb-4">Reset Password</h2>
               <Notification v-if="success" type="success" :message="success" />
               <Notification v-if="error" type="danger" :message="error" />
               <form v-if="!success" method="post" @submit.prevent="resetPassword">
                  <div class="field mb-2">
                     <label class="label">New Password</label>
                     <div class="control">
                        <input
                           v-model="password1"
                           type="password"
                           class="input"
                           name="password"
                           placeholder="password"
                           />
                     </div>
                  </div>
                  <div class="field mb-2">
                     <label class="label">Confirm New Password</label>
                     <div class="control">
                        <input
                           v-model="password2"
                           type="password"
                           class="input"
                           name="password"
                           placeholder="password"
                           />
                     </div>
                  </div>
                  <div class="control">
                     <button type="submit" class="bg-blue-400 py-1 w-full rounded-sm font-medium">
                     Reset Password
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
    asyncData(context){
        if (!context.route.query.code){
            context.redirect("/forgot-password")
        } else {
            return {
                code: context.route.query.code,
            }
        };
    },
    data() {
        return {
            password1: "",
            password2: "",
            success: null,
            error: null,
        };
    },
    methods: {
        async resetPassword() {
            this.error = null;
            if (this.password1 !== this.password2) {
                this.error = "Passwords do not match.";
                return;
            }
            try{
                await this.$axios.post("api/auth/reset-password", {
                    code: this.code,
                    password: this.password1,
                    passwordConfirmation: this.password2,
                });
                this.success = "Password updated successfully. You can now use it to log in to your account.";
            } catch (e) {
                this.error = "Something went wrong, please try again.  If you are still having trouble contact the site owner.";
            }
        },
    },
};
</script>
