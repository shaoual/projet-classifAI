<script setup lang="ts">
//optionnel
const props = defineProps<{ page404: string }>()
console.log(props.page404)
</script>
<template>
  <div>
    <h1 class="text-xl">Pas trouvé : {{ $route.fullPath }}</h1>
  </div>
</template>
