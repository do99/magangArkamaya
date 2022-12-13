<template>
  <header>
    <nav class="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a href="" class="flex items-center">
          <span
            class="self-center text-xl font-Poppins font-semibold whitespace-nowrap text-white"
            >Camshaft - {{ TitleHeader }}</span
          >
        </a>
      </div> 
    </nav>
  </header>
</template>


<script setup>

defineProps({
  TitleHeader: String
})

</script>