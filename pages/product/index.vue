<template>
  <div class="container mx-auto px-4 py-8 ">
    <h1 class="text-3xl font-bold mb-8 text-center">Products</h1>

    <!-- Show loading message -->
    <div v-if="isLoading" class="text-center text-lg text-gray-600">
      Loading products...
    </div>

    <!-- Show products grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="p-6 border rounded-lg shadow-lg hover: duration-200 bg-white relative group flex flex-col justify-between h-full hover:scale-105"
      >
        <!-- Clickable image with hover effect -->
        <NuxtLink :to="`/product/${product.id}`" class="block relative z-10 group-hover:opacity-90">
          <img
            :src="product.image"
            alt="Product Image"
            class="h-48 w-full object-contain mb-4 transition-transform transform "
          />
        </NuxtLink>

        <!-- Clickable product title with hover effect -->
        <NuxtLink
          :to="`/product/${product.id}`"
          class="block text-lg font-semibold mb-2 text-gray-900 hover:text-blue-500 transition-colors duration-300 relative z-10"
        >
        {{ product.title }}
        </NuxtLink>

        <div class="flex w-auto justify-center">
                  <!-- Product price -->
        <p class="text-black font-bold text-3xl">${{ product.price }}</p>

<!-- Add to Cart Button aligned at the bottom -->
<button
  @click="addToCart(product)"
  class="w-auto bg-blue-500 text-white py-2 px-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-auto relative z-20 mb-3 ml-5"
>
  Add to Cart
</button>
        </div>


      </div>
    </div>
  </div>
</template>






<script setup>
// Reactive variables
const products = ref([]);
const isLoading = ref(true); // Loading state

// Fetch products
onMounted(async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    products.value = await response.json();
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    isLoading.value = false; // Update loading state
  }
});

// Retrieve cart from local storage
const cart = ref(JSON.parse(localStorage.getItem('cart')) || []); // If no cart in localStorage, start with an empty array

// Add to Cart function
const addToCart = (product) => {
  // Add the product to the cart array
  cart.value.push(product);

  // Save the updated cart to local storage
  localStorage.setItem('cart', JSON.stringify(cart.value));

  console.log('Product added to cart:', product);
};
</script>






<style scoped>
/* Optional: Ensures the hover effect for image is distinct */
.group:hover .relative {
  opacity: 1;
}

.group:hover img {
  transform: scale(1.05); /* Distinct hover effect on image */
}

/* Title hover effect */
.group:hover h2 {
  color: #3b82f6; /* Blue color when hovering on the title */
}

/* Price color change on hover */
.group:hover .text-gray-600 {
  color: #3b82f6; /* Change price text color on hover */
}

/* Background color change when hovering over entire product card */
.group:hover {
  background-color: #f3f4f6; /* Light gray background when hovering over the whole card */
}
</style>