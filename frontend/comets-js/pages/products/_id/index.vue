<template>
  <div class="flex justify-center m-6">
    <div v-if="this.product !== null">
      <div class="flex flex-col items-center border rounded-lg bg-gray-100">
        <div class="w-full bg-white rounded-lg flex justify-center">

          <img :src="product.data.attributes.productImageURL" width="375" />
        </div>
        <div class="w-full p-5 flex flex-col justify-between">
          <div>
            <h4
              class="
                mt-1
                font-semibold
                text-lg
                leading-tight
                truncate
                text-gray-700
              "
            >
              {{ product.data.attributes.productTitle }}
            </h4>
            <div class="mt-1 text-gray-600">{{ product.data.attributes.productDescription }}</div>
          </div>

          <!--Snipcart-add-item adds the current item to the cart
            :data-item-id="product.data.id"  Gets the item id from Strapi JSON Array
            :data-item-price="product.data.attributes.price" Gets the price from Strapi JSON Array
            :data-item-url="`${storeUrl}${this.$route.fullPath}`"  Gets the full url to the item storeUrl is an environment variable in nuxt.config.js (thanks Snipcart for leaving that one out gg)
            :data-item-description="product.data.attributes.description"  Gets the item description from JSON array
            :data-item-image="product.data.attributes.imageURL"  Gets the item's image url from Strapi
            :data-item-name="product.data.attributes.title"  Gets the item's title from Strapi
            Removed the customFields because who really needs it and it causes more problems than it worth.  -->  
            
          <button
            class="
              snipcart-add-item
              mt-4
              bg-white
              border border-gray-200
              d
              hover:shadow-lg
              text-gray-700
              font-semibold
              py-2
              px-4
              rounded
              shadow
            "
            
            :data-item-id="product.data.id"
            :data-item-price="product.data.attributes.productPrice"
            :data-item-url="`${storeUrl}${this.$route.fullPath}`"
            :data-item-description="product.data.attributes.productDescription"
            :data-item-image="product.data.attributes.productImageURL"
            :data-item-name="product.data.attributes.productTitle"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      storeUrl: process.env.storeUrl,
    };
  },
  
  created: async function () {
    const res = await fetch(
      `http://localhost:1337/api/products/${this.$route.params.id}`
    );
    this.product = await res.json();
  },
};
</script>
<style>
</style>