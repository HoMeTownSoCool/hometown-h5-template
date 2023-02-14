<script setup lang="ts">
import { fetchGetMostSearched } from '@/service';
const ns = useNamespace('home');
interface SearchedItem {
  index: number;
  title: string;
}

const msData = ref<SearchedItem[]>([]);
const msTitle = ref('');
async function getMostSearched() {
  try {
    const res = await fetchGetMostSearched();
    if (res.data) {
      msData.value = res.data.data;
      msTitle.value = res.data.title;
    }
  } catch (error) {
    throw Error(`${error}`);
  }
}

onMounted(() => {
  getMostSearched();
});
</script>
<template>
  <div :class="[ns.b('container')]">
    <div :class="ns.b('searched')" box="border">
      <h3 text-primary box="border" p="12px" m="0" text="left" :class="ns.be('searched', 'title')">{{ msTitle }}</h3>
      <div :class="ns.be('searched', 'content')">
        <div v-for="item in msData" :key="item.index" flex text="12px" :class="ns.em('content', 'item')">
          <div text-primary p="x-12px">{{ item.index }}.</div>
          <div text-regular>{{ item.title }}</div>
          <hello-world></hello-world>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './style/index.scss';
</style>
