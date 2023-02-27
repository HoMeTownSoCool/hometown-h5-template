<script lang="ts" setup>
import ImgLogo from '@/assets/images/common/logo.png';
const router = useRouter();
const cofetti = useCofetti();
const ns = useNamespace('hello-world');

onMounted(() => {
  console.log(cofetti.play(), 'cofetti');
});
</script>
<template>
  <div wh-full box-border p16px :class="[ns.b()]">
    <icon-title-desc :icon="ImgLogo" title="hometown-h5-template" desc="Be easy. Be simple. Out of the box📦">
    </icon-title-desc>
    <div flex-center my-32px>
      <p-button w-130px h-36px type="primary" @click="router.push('/about')">HoMeTown 🐵</p-button>
    </div>
    <div>
      <h3>Introduction</h3>
      <p text-color-regular>
        hometown-h5-template It is an out-of-the-box h5 front-end solution, which provides a rich and concise
        development environment for front-end development friends, focuses on business, improves development efficiency,
        and can also be used for learning reference.
      </p>
    </div>
    <div :class="[ns.e('stack')]">
      <h3>Technology stack</h3>
      <p>Vue3 <span class="tag">v3.2.31</span></p>
      <p>TypeScript <span class="tag">v4.9.5</span></p>
      <p>Vite <span class="tag">v4.1.1</span></p>
      <p>VantUI <span class="tag">v4.0.10</span></p>
      <p>Pinia <span class="tag">v2.0.13</span></p>
      <p>UnoCSS <span class="tag">v0.49.4</span></p>
      <p>sass <span class="tag">v1.49.11</span></p>
      <p>HoMeTownJS <span class="tag">*.**.**</span></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/style/scss/mixins/mixins.scss';
@include b(hello-world) {
  @include e(stack) {
    p {
      --at-apply: text-color-regular flex-y-center;
    }
  }
}

.tag {
  --at-apply: text-primary bg-color-secondary text-12px p-y-2px p-x-8px rounded-6px ml-12px;
}
</style>
