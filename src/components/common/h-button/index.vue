<script lang="ts" setup>
import { buttonProps } from './props';
const ns = useNamespace('p-button');
const nsVan = useNamespace('van-p-button');

const props = defineProps(buttonProps);
</script>
<template>
  <div :class="[ns.b()]">
    <van-button
      v-if="[undefined, 'primary'].includes(props.type)"
      :class="[nsVan.b()]"
      :plain="props.type === undefined"
      type="primary"
      :disabled="props.disabled"
    >
      <slot></slot>
    </van-button>

    <van-button v-else :class="[nsVan.b(), nsVan.m('secondary')]" :disabled="props.disabled">
      <slot></slot>
    </van-button>
  </div>
</template>
<style lang="scss">
@import './style/index.scss';
</style>
