<script setup lang="ts">
const ns = useNamespace('home');
const arr = ref([]);
</script>
<template>
  <div :class="[ns.b()]">
    <van-button>你好</van-button>
    <hello-world></hello-world>
    <div class="box" wh-full bg="primary">
      <div>阿斯达是大</div>
      <div>{{ isArray(arr) }}</div>
    </div>
  </div>
</template>
