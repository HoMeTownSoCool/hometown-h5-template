<script lang="ts" setup>
import { iconTitleDescProps } from './props';
const props = defineProps(iconTitleDescProps);
const ns = useNamespace('icon-title-desc');
</script>
<template>
  <div :class="[ns.b()]">
    <van-image v-if="props.icon" :class="ns.m('icon')" :src="props.icon"></van-image>
    <h4 v-if="props.subtitle" :class="[ns.m('subtitle')]">{{ props.subtitle }}</h4>
    <h3 v-if="props.title" :class="[ns.m('title'), props.subtitle ? 'text-32px' : 'text-20px']">
      {{ props.title }}
    </h3>
    <p v-if="props.desc" :class="[ns.m('desc')]">
      {{ props.desc }}
    </p>
  </div>
</template>
<style lang="scss">
@import './style/index.scss';
</style>
