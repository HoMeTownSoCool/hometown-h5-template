<script setup lang="ts">
const ns = useNamespace('home');
</script>
<template>
  <div :class="[ns.b('container')]">
    <hello-world></hello-world>
  </div>
</template>
