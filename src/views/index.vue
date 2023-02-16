<script setup lang="ts">
const ns = useNamespace('home');

function handleBfbButtonClick() {
  console.log('嘿！您猜怎么着？！点击按钮了！');
}
</script>
<template>
  <div :class="[ns.b('container')]" p-bto-fix-btn text-color-primary>
    <hello-world></hello-world>
    <bottom-fixing-button :disabled="true" @button-click="handleBfbButtonClick"></bottom-fixing-button>
  </div>
</template>
