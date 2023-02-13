<script lang="ts" setup>
import { isArray } from '@/utils';
const names = ref(['你好', '朋友']);
</script>
<template>
  <div></div>
  <button
    w="300px"
    p="y-2 x-4"
    font="semibold"
    shadow="lg"
    text="white"
    bg="green-500 hover:green-700"
    border="rounded-lg none "
    cursor="pointer"
  >
    {{ isArray(names) }}
  </button>
</template>
