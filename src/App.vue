<template>
  <router-view></router-view>
</template>
<style lang="scss">
@import '@/style/scss/mixins/function.scss';
html,
body,
#app {
  width: 100%;
  height: 100%;
  font-family: getCssVar('font-family');
}
</style>
