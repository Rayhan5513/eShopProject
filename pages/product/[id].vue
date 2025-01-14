<template>
    <div class="container mx-auto p-4">
      <div class="flex flex-col md:flex-row items-start">
        <img :src="product.image" alt="Product Image" class="h-96 w-full md:w-1/3 object-contain">
        <div class="md:ml-8">
          <h1 class="text-3xl font-bold">{{ product.title }}</h1>
          <p class="text-gray-500">${{ product.price }}</p>
          <p class="mt-4">{{ product.description }}</p>
          <button class="bg-green-500 text-white px-4 py-2 mt-4" @click="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  //import { ref, onMounted } from 'vue';
  //import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const product = ref({});
  
  onMounted(async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`);
    product.value = await response.json();
  });
  
  const addToCart = () => {
    // Logic to add product to cart
  };
  </script>
  