<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8 text-center">Cart</h1>
  
      <!-- Show empty cart message -->
      <div v-if="cart.length === 0" class="text-center text-lg text-gray-600">
        Your cart is empty.
      </div>
  
      <!-- Show cart items -->
      <div v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="product in cart"
            :key="product.id"
            class="p-6 border rounded-lg shadow-lg bg-white relative group flex flex-col justify-between"
          >
            <!-- Product image -->
            <img
              :src="product.image"
              alt="Product Image"
              class="h-48 w-full object-contain mb-4"
            />
  
            <!-- Product title -->
            <h2 class="text-lg font-semibold mb-2 text-gray-900">
              {{ product.title }}
            </h2>
  
            <!-- Product price -->
            <p class="text-gray-600 text-sm mb-4">{{ product.price }}</p>
  
            <!-- Remove button -->
            <button
              @click="removeFromCart(product.id)"
              class="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Retrieve the cart from local storage
  const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);
  
  // Remove product from cart
  const removeFromCart = (productId) => {
    // Filter out the product with the given ID
    cart.value = cart.value.filter((product) => product.id !== productId);
  
    // Update local storage
    localStorage.setItem('cart', JSON.stringify(cart.value));
  
    console.log(`Product with ID ${productId} removed from cart.`);
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  