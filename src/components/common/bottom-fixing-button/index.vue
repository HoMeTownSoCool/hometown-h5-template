<script lang="ts" setup>
import { bottomFixingButtonProps } from './props';
const ns = useNamespace('bottom-fixing-button');
const props = defineProps(bottomFixingButtonProps);
const emits = defineEmits(['buttonClick']);
function onClick() {
  if (props.disabled) return;
  emits('buttonClick');
}
</script>
<template>
  <div :class="ns.b()">
    <p-button w-280px h-44px type="primary" :disabled="props.disabled" @click="onClick">{{ props.text }}</p-button>
  </div>
</template>
<style lang="scss">
@import './style/index.scss';
</style>
