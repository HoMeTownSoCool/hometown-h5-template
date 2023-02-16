<script lang="ts" setup>
import ImgLogo from '@/assets/images/common/logo.png';
import ImgIcon1 from '@/assets/images/common/recharged-successfully.png';
import ImgArrowRight from '@/assets/images/common/arrow-right.png';
const iptVal = ref('123123');

/** 校验 iptVal */
function verifyIptVal(val: string) {
  console.log(val, '测试');
  if (val === '123') return false;
  return true;
}

function onClickIpt() {
  console.log('dianji');
}

const show = ref(false);
const iconClose = ref(false);
const dialogType = ref<number>(0);
function showDialog() {
  show.value = true;
  iconClose.value = true;
  dialogType.value = 1;
}
function showDialog2() {
  show.value = true;
  iconClose.value = false;
  dialogType.value = 2;
}
function showDialog3() {
  show.value = true;
  iconClose.value = true;
  dialogType.value = 0;
}
/** dialog - 点击取消 */
function cancelMethod() {
  show.value = false;
}
/** dialog - 点击确认 */
function confirmMethod() {
  show.value = false;
}
</script>
<template>
  <div>
    <div flex-x-center>
      <icon-title-desc :icon="ImgLogo" title="hometown-h5-template" desc="Be easy."></icon-title-desc>
    </div>
    <div box-border pl-20px>
      <h3>p-input</h3>
      <h4>普通 {{ iptVal }}</h4>
      <p-input v-model="iptVal" w-311px h-40px placeholder="请输入所属银行">
        <template #prefix>￥</template>
      </p-input>
      <h4>密码 {{ iptVal }}</h4>
      <p-input v-model="iptVal" type="password" w-311px h-40px placeholder="请输入所属银行"> </p-input>
      <h4>禁用 or 仅要样式 {{ iptVal }}</h4>
      <div @click="onClickIpt">
        <p-input v-model="iptVal" disabled w-136px h-40px placeholder="添加卡">
          <template #suffix> <van-image w-6px h-10px :src="ImgArrowRight"></van-image> </template>
        </p-input>
      </div>
      <h4>失去焦点校验 {{ iptVal }}</h4>
      <p-input v-model="iptVal" w-311px h-40px placeholder="请输入所属银行" :verify-pass="verifyIptVal"> </p-input>
    </div>
    <div box-border pl-20px>
      <h3>弹框</h3>
      <div flex gap-10px>
        <p-button w-100px h-36px @click="showDialog">单按钮</p-button>
        <p-button w-100px h-36px @click="showDialog2">双按钮</p-button>
        <p-button w-100px h-36px @click="showDialog3">无按钮</p-button>
        {{ show }}
      </div>
      <p-dialog
        :show="show"
        :show-cancel-button="true"
        :show-confirm-button="true"
        @cancel="cancelMethod"
        @confirm="confirmMethod"
      >
        <icon-title-desc title="111" desc="2222"></icon-title-desc>
      </p-dialog>
    </div>
    <div box-border pl-20px>
      <h3>没有数据</h3>
      <data-empty text="没有找到相关记录"></data-empty>
    </div>

    <div box-border pl-20px>
      <h3>p-button</h3>
      <h4>普通按钮</h4>
      <p-button w-128px h-36px>知道了</p-button>
      <h4>主题按钮</h4>
      <p-button w-128px h-36px type="primary">确认支付</p-button>
      <h4>次要按钮</h4>
      <p-button w-128px h-36px type="secondary">取消</p-button>
    </div>
    <div box-border pl-20px>
      <h3>icon-title-desc</h3>
      <h4>图标 标题 描述</h4>
      <icon-title-desc
        :icon="ImgIcon1"
        title="提交信息不匹配"
        desc="你提交的银行卡信息（持卡人姓名、证件信息、银行预留信息）与银行系统预留的信息不一致，请核对后重试，或联系银行核实卡信息"
      ></icon-title-desc>

      <icon-title-desc
        :icon="ImgIcon1"
        title="提现申请已提交"
        desc="您可在【首页-钱包-账单】查看进度"
      ></icon-title-desc>

      <h4>图标 副标题 标题</h4>
      <icon-title-desc :icon="ImgIcon1" subtitle="充值成功" title="+ 1,000.00"></icon-title-desc>

      <h4>图标 标题</h4>
      <icon-title-desc :icon="ImgIcon1" subtitle="添加成功!"></icon-title-desc>
    </div>
  </div>
</template>
