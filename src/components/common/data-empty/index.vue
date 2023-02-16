<script lang="ts" setup>
import { emptyProps } from './empty';
import ImgEmpty from '@/assets/images/common/empty.png';
const ns = useNamespace('data-empty');
const props = defineProps(emptyProps);
</script>
<template>
  <div :class="[ns.b()]" w-full flex flex-col flex-y-center>
    <van-image w-120px h-121px text-center :src="ImgEmpty"></van-image>
    <p text="#666 14px" m-t-13px>{{ props.text }}</p>
  </div>
</template>
