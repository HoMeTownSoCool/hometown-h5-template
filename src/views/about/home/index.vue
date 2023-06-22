<script lang="ts" setup>
import { useCofetti } from 'cofetti';
import { showToast } from 'vant';
const cofetti = useCofetti();
const ns = useNamespace('about');
const router = useRouter();
const stacks = [
  'https://img.shields.io/badge/-Vue.js-4FC08D?&logo=Vue.js&logoColor=white',
  'https://img.shields.io/badge/-Vite-646CFF?logo=Vite&logoColor=white',
  'https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white',
  'https://img.shields.io/badge/-UnoCSS-666?logo=UnoCSS&logoColor=white',
  'https://img.shields.io/badge/-pnpm-F69220?logo=pnpm&logoColor=white',
  'https://img.shields.io/badge/-Sass-CC6699?logo=sass&logoColor=white'
];
const merits = [
  '基于Vue3、Ts、Pinia等前端前沿技术栈开发',
  '完善的Eslint + Prettier项目协同方案，“0” 配置直接上手开干',
  '项目内置 Vite Conf，“0” 配置直接上手业务开发',
  'Components、Hooks、Utils、Vue 的全自动导入，“0” 引入，彻底解放双手',
  'pnpm 包管理方案',
  'UnoCss + Scss + CssVar 随时修改主题色',
  '自动生成前端路由，约定大约配置'
];

function herf2page(url: string) {
  window.location.href = url;
}

function onClickH3Tag() {
  console.log('hello');
}

onMounted(() => {
  cofetti.play();
});
</script>
<template>
  <div box-border p16px :class="[ns.b()]" p-bto-fix-btn>
    <icon-title-desc
      icon="https://raw.githubusercontent.com/HoMeTownJS/site/main/public/images/logo.png"
      title="hometown-h5-template"
      desc="Be easy. Be simple. 开箱即用 📦"
      @click="showToast('great!')"
    >
    </icon-title-desc>
    <div flex-center mt-20px>
      <h-button type="primary" w-112px h-36px @click="router.push('/example')">Jump page</h-button>
    </div>
    <div>
      <h3 @click="onClickH3Tag">简介</h3>
      <p text-color-regular text-14px lh-26px>
        hometown-h5-template 是一个基于前端前沿技术栈、干净、开箱即用的前端H5解决方案。
        提供完善的前端H5开发环境，快速启动项目，为专注业务实现与开发，提高开发效率而生，也可用于学习参考。
      </p>
    </div>
    <div>
      <h3>技术栈</h3>
      <van-space wrap><van-image v-for="item in stacks" :key="item" :src="item"></van-image></van-space>
    </div>

    <div>
      <h3>协同方案</h3>
      <van-space wrap>
        <van-image src="https://img.shields.io/badge/-ESLint-4B32C3?logo=ESLint&logoColor=white"></van-image>
        <van-image src="https://img.shields.io/badge/-Prettier-F7B93E?logo=Prettier&logoColor=white"></van-image>
        <van-image src="https://img.shields.io/badge/-commitlint-000000?logo=commitlint&logoColor=white"></van-image>
      </van-space>
    </div>

    <div>
      <h3>优点</h3>
      <p v-for="(item, index) in merits" :key="index">{{ index + 1 }}. {{ item }}。</p>
    </div>

    <div>
      <h3>作者</h3>
      <div text-primary font-family-medium font-600 @click="herf2page('https://juejin.cn/user/4116184668057390')">
        HoMeTown
      </div>
    </div>

    <bottom-fixing-button>
      <van-image
        w-32px
        src="https://emojis.slackmojis.com/emojis/images/1643514069/257/github.png?1643514069"
        @click="herf2page('https://github.com/HoMeTownSoCool/hometown-h5-template')"
      ></van-image>
    </bottom-fixing-button>
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
