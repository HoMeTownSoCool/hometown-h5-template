<template>
  <router-view v-slot="{ Component }">
    <!-- created->mounted->activated -->
    <keep-alive>
      <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name" />
    </keep-alive>
    <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name" />
  </router-view>
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
