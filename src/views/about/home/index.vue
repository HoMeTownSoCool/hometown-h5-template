<script lang="ts" setup>
import ImgLogo from '@/assets/images/common/logo.png';
const cofetti = useCofetti();
const ns = useNamespace('about');

onMounted(() => {
  cofetti.play();
});
</script>
<template>
  <div box-border p16px :class="[ns.b()]" p-bto-fix-btn>
    <icon-title-desc :icon="ImgLogo" title="hometown-h5-template" desc="Be easy. Be simple. 开箱即用 📦">
    </icon-title-desc>
    <div>
      <h3>简介</h3>
      <p text-color-regular text-14px lh-26px>
        hometown-h5-template 是一个开箱即用的h5前端解决方案，它提供了丰富而简洁的
        前端开发朋友的开发环境，专注于业务，提高开发效率， 也可用于学习参考。
      </p>
    </div>
    <div :class="[ns.e('stack')]">
      <h3>用到的技术</h3>
      <p>Vue3 <span class="tag">v3.2.31</span></p>
      <p>TypeScript <span class="tag">v4.9.5</span></p>
      <p>Vite <span class="tag">v4.1.1</span></p>
      <p>VantUI <span class="tag">v4.0.10</span></p>
      <p>Pinia <span class="tag">v2.0.13</span></p>
      <p>UnoCSS <span class="tag">v0.49.4</span></p>
      <p>sass <span class="tag">v1.49.11</span></p>
    </div>

    <div>
      <h3>项目亮点</h3>
      <p>1. 基于Vue3、Ts、Pinia等前端前沿技术栈开发。</p>
      <p>3. 完善的Eslint + Prettier项目协同方案，“0” 配置直接上手开干。</p>
      <p>6. 项目内置 Vite Conf，“0” 配置直接上手业务开发。</p>
      <p>4. Components、Hooks、Utils、Vue 的全自动导入，“0” 引入，彻底解放双手。</p>
      <p>5. pnpm 包管理方案。</p>
      <p>7. UnoCss + Scss + CssVar 随时修改主题色。</p>
      <p>8. 自动生成前端路由，约定大约配置！</p>
    </div>

    <div>
      <h3>作者</h3>
      <div text-primary font-family-ali-medium>HoMeTown 🐵</div>
    </div>

    <bottom-fixing-button :disabled="true"></bottom-fixing-button>
  </div>
</template>
<style lang="scss" scoped>
@import '@/style/scss/mixins/mixins.scss';

@include b(about) {
  p {
    --at-apply: text-color-regular flex-y-center text-14px;
  }
}

.tag {
  --at-apply: text-primary bg-color-secondary text-12px p-y-2px p-x-8px rounded-6px ml-12px font-family-ali-regular;
}
</style>
