<script lang="ts" setup>
import ImgLogo from '@/assets/images/common/logo.png';
</script>
<template>
  <div w-full flex flex-col flex-y-center box-border p-y-24px>
    <van-image w-100px text-center :src="ImgLogo"></van-image>
    <h1 m-0 text-18px m-t-24px text-primary>✨ hometown-h5-template 💥</h1>
    <h4 text-regular>Be easy.</h4>
    <van-button type="primary" size="small">主要按钮</van-button>
  </div>
</template>
