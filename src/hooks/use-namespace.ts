/**
 * BEM 组成
 * Block 块独立实体，独立的意义
 * 如：header,container,menu,checkbox,input
 *
 * Element 元素block的一部分，没有独立的意义。语意上和block有关系
 * 如：menuitem,listitem,checkboxcaption,headertitl
 *
 * Modifier 修饰符block或element上的标记。使用他来改变外观或行为
 * 如：disabled,highlighted,checked,fixed,sizebig,coloryellow
 */
export const defaultNamespace = 'hometown';
const statePrefix = 'is-';

// eslint-disable-next-line max-params
function bemCreator(namespace: string, block: string, blockSuffix: string, element: string, modifier: string) {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
}

/** namespace */
export const useNamespace = (block: string) => {
  const namespace = defaultNamespace;
  const b = (blockSuffix = '') => bemCreator(namespace, block, blockSuffix, '', '');
  const e = (element?: string) => (element ? bemCreator(namespace, block, '', element, '') : '');
  const m = (modifier?: string) => (modifier ? bemCreator(namespace, block, '', '', modifier) : '');
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? bemCreator(namespace, block, blockSuffix, element, '') : '';
  const em = (element?: string, modifier?: string) =>
    element && modifier ? bemCreator(namespace, block, '', element, modifier) : '';
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? bemCreator(namespace, block, blockSuffix, '', modifier) : '';
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier ? bemCreator(namespace, block, blockSuffix, element, modifier) : '';
  const is = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : '';
  };
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  };
};
