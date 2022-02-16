<template>
    <div class="flex justify-center">
        <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
            <NavBar />
            <Nuxt class="flex-grow"/>
        </div>
        <div hidden id="snipcart" data-api-key="Y2UzMzQ2NTUtODBjZS00MzZiLWJiZmEtYmY3MGM2YzJkN2FhNjM3Nzg5NDA5ODczNzQ1NzU0"></div>
    </div>
</template>
<script>
import NavBar from './../components/navbar'
export default {
  components: { NavBar }
}
</script>