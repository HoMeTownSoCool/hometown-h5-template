import useCssvar from '../../hooks/use-cssvar';

function buildRule(keys: string[], cssvarKey: string, cssKey: string) {
  const rules: any[] = [];
  const uc = useCssvar();
  keys.forEach((type: string) =>
    rules.push([
      `${cssvarKey}${type ? `-${type}` : ''}`,
      {
        [cssKey]: `${uc.getCssvar([cssvarKey, type])} !important`
      }
    ])
  );
  return rules;
}

export const createRules = function createRules(): unknown[] {
  const uc = useCssvar();
  let rules: unknown[] = [];
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
  return rules;
};
