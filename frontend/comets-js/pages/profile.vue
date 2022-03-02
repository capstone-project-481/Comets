<template>
   <section class="section">
      <div class="p-3">
        <div class="text-3xl text-gray-700 text-center font-bold">My Profile</div>
        <div class="text-xl text-gray-700 font-bold text-left ">Account Information</div>
          <div class="p-1 text-gray-500 font-normal">Username: {{ loggedInUser.username }}</div>
          <div class="p-1 text-gray-500 font-normal">Email: {{ loggedInUser.email }}</div>
          <div class="p-1 text-gray-500 font-normal">Shipping Address:</div>
          <div class="p-1 text-xl text-center text-gray-700 font-bold">Order History</div>
            <div class="p-1">
              <ol>
                <li>1.</li>
                <li></li>
                <li></li>
              </ol>
            </div>
      </div>      
   </section>
</template>
<script>
//Guarantees that only logged in users can access the my profile page
import { mapGetters } from "vuex";
export default {
    middleware: "auth",
    computed: {
        ...mapGetters(["loggedInUser"]),
    },
};
</script>
