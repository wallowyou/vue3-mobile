<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <div></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref('hello wolrd!')
</script>
