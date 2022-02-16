<template>
    <div class="flex justify-center">
        <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
            <NavBar />
            <Nuxt class="flex-grow"/>
        </div>
        <div hidden id="snipcart" data-api-key="ZmNjNDFmYzItNGNmMi00ZmU2LTkzOGMtN2I3MmEyNDExZWY2NjM3NzgzMzA2MTYwMzc1MTc5"></div>
    </div>
</template>
<script>
import NavBar from './../components/navbar'
export default {
  components: { NavBar }
}
</script>