<script setup lang="ts">
const ns = useNamespace('home');
</script>
<template>
  <div :class="[ns.b('container')]" p-bto-fix-btn text-color-primary>
    <hello-world></hello-world>
  </div>
</template>
