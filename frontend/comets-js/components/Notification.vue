<!--This is here to display a notification to the user Displays a success message if registration works displays a message if it doesn't-->
<template>
 <div :class="`is-${type}`" class="notification">
 {{ message }}
 </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        type: {
            type: String,
            default: "success",
            validator: (val) => ["danger", "success"].includes(val),
        },
        message: {
            type: String,
            default: "",
        },
    },
};
</script>