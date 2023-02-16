<script lang="ts" setup>
import ImgColse from '@/assets/images/common/close.png';
import { dialogProps } from './props';
const ns = useNamespace('p-dialog');
const props = defineProps(dialogProps);
const emit = defineEmits(['cancel', 'confirm']); // 子组件通信父组件 点击了取消按钮  确认按钮
// 子组件通信父组件 点击了取消按钮
function onCancel() {
  emit('cancel');
}
// 子组件通信父组件 点击了取 确认按钮
function onConfirm() {
  emit('confirm');
}

/** 存在按钮的长度 */
const buttonsLength = computed(() => {
  const { showCancelButton, showConfirmButton } = props;
  const btnFlags = [showCancelButton, showConfirmButton];
  return btnFlags.filter(flag => flag).length;
});

// 按钮的宽度
const buttonWidthClass = computed(() => {
  return buttonsLength.value === 2 ? 'w-110px' : 'w-180px';
});
</script>
<template>
  <div :class="[ns.b()]">
    <van-dialog :show="props.show" :show-confirm-button="false">
      <div p-24px pb-32px relative>
        <van-image
          v-if="showClose"
          class="absolute!"
          :src="ImgColse"
          alt=""
          w-20px
          right-16px
          top-16px
          @click="onCancel"
        ></van-image>
        <slot></slot>
        <div v-if="buttonsLength > 0" flex justify-center gap-12px m-t-24px>
          <p-button v-if="showCancelButton" :class="[buttonWidthClass, 'h-36px']" type="secondary" @click="onCancel">{{
            cancelButtonText
          }}</p-button>
          <p-button v-if="showConfirmButton" :class="[buttonWidthClass, 'h-36px']" type="primary" @click="onConfirm">{{
            confirmButtonText
          }}</p-button>
        </div>
      </div>
    </van-dialog>
  </div>
</template>
