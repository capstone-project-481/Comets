<template>
  <div>
    <div
      class="
        m-6
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
        gap-4
      "
    >
      <!--For every product in products.data (this is the object array and tells the loop to start here.  We are looping through the data section only and not products like the tutorial had ) -->
      <div
        v-for="product in products.data"
        :key="product.id"
        class="border rounded-lg bg-gray-100 hover:shadow-lg"
      >
        <!-- Link to the product at p.id this is the first data element in products.data this is how the user gets to an individual product-->
        <nuxt-link :to="`/products/${product.id}`">
          <div class="rounded-t-lg bg-white pt-2 pb-2">
            <!-- Get the image url from the attributes object-->
            <img class="crop mx-auto" :src="product.attributes.productImageURL" />
          </div>
          <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
            <h4
              class="
                mt-1
                font-semibold
                text-base
                leading-tight
                truncate
                text-gray-700
              "
            >
              <!-- Get the title from the attributes object-->
              {{ product.attributes.productTitle }}
            </h4>

            <!-- Get the description from the attributes object-->
            <div class="mt-1 text-sm text-gray-700">{{ product.attributes.productDescription }}</div>
            <div class="mt-1 text-sm text-gray-700">
              ${{ product.attributes.productPrice }}
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

      //Return the products object array to be processed
      products: []

      /**
       * Below is an example of how the JSON from Strapi is structured
       * Products is the object
       * data is an object array (the terms are confusing)
       * the first element of data is the id: the second element is the attributes object think of it like: dataArray[id, {attributesObject}] index 0 is the id index 1 is the attributes object
       * Now we get to the data itself anything you add to Strapi's model ends up in the attributes tag
        products: {
          data: [{
            id: 1,
            attributes:{
              title: 'Faroe Islands',
              description: 'Print of faroe islands',
              price: '25.99',
              image: 'http://localhost:1337/uploads/1494795879321_5bf98b9578.jpg',
            }
          }]
        }
      */
    }
  },
  created: async function () {
    const res = await fetch(`${process.env.STORE_URL}/api/products/`)
    this.products = await res.json()
  }
}
</script>
