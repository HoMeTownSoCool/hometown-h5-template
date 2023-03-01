import useCssvar from '../hooks/use-cssvar';
import type { Rule } from 'unocss';
const uc = useCssvar();

function buildRule(keys: string[], cssvarKey: string, cssKey: string) {
  const rulees: Rule[] = [];
  keys.forEach((type: string) =>
    rulees.push([
      `${cssvarKey}${type ? `-${type}` : ''}`,
      {
        [cssKey]: `${uc.getCssvar([cssvarKey, type])} !important`
      }
    ])
  );
  return rulees;
}

export const createRules = function createRules(): Rule[] {
  let rules = [];
  /** z-index */
  const zIndexs = [/^z-(\d+)$/, ([, d]: [unknown, number]) => ({ 'z-index': d })];
  rules.push(zIndexs);

  /** text colors */
  const textColors = ['primary', 'regular', 'secondary', 'placeholder', 'disabled'];
  rules = [...rules, ...buildRule(textColors, 'text-color', 'color')];

  /** bg colors */
  const bgColors = ['primary', 'secondary', 'regular'];
  rules = [...rules, ...buildRule(bgColors, 'bg-color', 'background-color')];

  /** box shadows */
  const boxShadows = ['primary'];
  rules = [...rules, ...buildRule(boxShadows, 'box-shadow', 'box-shadow')];

  /** box rounded */
  const boxRoundeds = ['primary'];
  rules = [...rules, ...buildRule(boxRoundeds, 'box-rounded', 'border-radius')];

  /** font familys */
  const fontFamilys = ['', 'pf-medium', 'ali-medium', 'ali-regular'];
  rules = [...rules, ...buildRule(fontFamilys, 'font-family', 'font-family')];

  /** bottom-fixing-btn-padding */
  rules.push([
    'p-bto-fix-btn',
    {
      'padding-bottom': `${uc.getCssvar(['bottom-fixing-button', 'wrap-height'])} !important`
    }
  ]);
  return rules as Rule[];
};

export const createShortcuts = function createShortcuts() {
  const shortcuts = {
    'wh-full': 'w-full h-full',
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'flex-col': 'flex flex-col',
    'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
    'ellipsis-text': 'nowrap-hidden text-ellipsis'
  };
  return shortcuts;
};

export const createTheme = function createTheme() {
  const theme = {
    colors: {
      primary: uc.getCssvar(['color', 'primary'])
    }
  };
  return theme;
};
