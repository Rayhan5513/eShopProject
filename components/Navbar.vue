<template>
  <nav class="bg-blue-500 text-white p-4 flex justify-between items-center h-20">
    <!-- Home Button on the Left -->
    <div>
      <NuxtLink
        to="/"
        class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
      >
        Home
      </NuxtLink>
    </div>

    <!-- Other Buttons on the Right -->
    <ul class="flex space-x-4">
      <li>
        <NuxtLink
          to="/product"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Product
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/cart"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Cart
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/favorites"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Favorite
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
