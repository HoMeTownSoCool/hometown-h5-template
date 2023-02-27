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

export const createRules = function createRules(): any {
  const uc = useCssvar();
  let rules: any = [];
  /** z-index */
  const zIndexs = [/^z-(\d+)$/, ([, d]: [unknown, number]) => ({ 'z-index': d })];
  rules.push(zIndexs);

  /** text colors */
  const textColors = ['primary', 'regular', 'secondary', 'placeholder', 'disabled'];
  rules = [...rules, ...buildRule(textColors, 'text-color', 'color')];

  /** bg colors */
  const bgColors = ['primary', 'secondary'];
  rules = [...rules, ...buildRule(bgColors, 'bg-color', 'background-color')];

  /** font familys */
  const fontFamilys = ['', 'medium', 'regular'];
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
