<script lang="ts" setup>
import { useCofetti } from 'cofetti';
const ns = useNamespace('example');
const cofetti = useCofetti();
const buttonText = ref('🌰');

function onTouchStart() {
  cofetti.play();
}
</script>
<template>
  <div wh-full :class="[ns.b()]">
    <h1 text-center m-0>只是个例子</h1>
    <p text-color-regular text-14px text-center>点击有奇效</p>
    <div class="loader"><div></div></div>
    <h2 text-86px text-center cale-100 active-scale-180 transition-all @touchstart="onTouchStart">{{ buttonText }}</h2>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/scss/mixins/mixins.scss';

@include b(example) {
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  --at-apply: p-t-24px box-border;
  h2 {
  }
}
</style>
