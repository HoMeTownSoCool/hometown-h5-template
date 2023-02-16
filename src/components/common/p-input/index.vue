<script lang="ts" setup>
import { pInputProps } from './props';
import ImgOpen from '@/assets/images/input/open.png';
import ImgClose from '@/assets/images/input/close.png';
const ns = useNamespace('p-input');
const props = defineProps(pInputProps);
const emits = defineEmits(['update:modelValue']);

const inputValue = ref('');
function onInput(e: Event) {
  const targetValue = (e.target as HTMLInputElement).value.toUpperCase();
  inputValue.value = targetValue;
  emits('update:modelValue', targetValue);
}
watch(
  () => props.modelValue,
  value => {
    inputValue.value = value;
  },
  { immediate: true }
);

const isFocus = ref(false);
const isVerifySuccess = ref(true);
function onBlur() {
  isFocus.value = false;
  isVerifySuccess.value = props.verifyPass(inputValue.value);
}
function onFocus() {
  isFocus.value = true;
  isVerifySuccess.value = props.verifyPass(inputValue.value);
}

const inputType = ref(props.type);
const isShowPwd = ref(false);
function toggleShowPwd() {
  isShowPwd.value = !isShowPwd.value;
  inputType.value = isShowPwd.value ? 'text' : 'password';
}
</script>
<template>
  <div :class="[ns.b(), ns.is('focus', isFocus), ns.is('verify-fail', !isVerifySuccess)]">
    <slot name="prefix"></slot>
    <input
      :value="inputValue"
      w-full
      text-14px
      font-family-regular
      :class="[ns.e('inner')]"
      :placeholder="props.placeholder"
      :type="inputType"
      :disabled="props.disabled"
      @input="onInput"
      @blur="onBlur"
      @focus="onFocus"
    />
    <transition name="van-fade">
      <div v-if="!isVerifySuccess" :class="[ns.e('verify-word')]">{{ props.verifyFailWord }}</div>
    </transition>
    <div v-if="props.type === 'password'" w-24px h-22px :class="[ns.m('pwd-contorl')]" @click="toggleShowPwd">
      <van-image v-show="!isShowPwd" wh-full :src="ImgOpen"></van-image>
      <van-image v-show="isShowPwd" wh-full :src="ImgClose"></van-image>
    </div>
    <slot name="suffix"></slot>
  </div>
</template>
<style lang="scss" scoped>
@import './style/index.scss';
</style>
