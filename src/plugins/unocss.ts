import useCssvar from '../hooks/use-cssvar';
const uc = useCssvar();

export const createRules = function createRules(): any {
  const rules: any = [];
  /** z-index */
  const zIndexs = [/^z-(\d+)$/, ([, d]: [unknown, number]) => ({ 'z-index': d })];
  rules.push(zIndexs);
  /** text colors */
  const textColors = ['primary', 'regular', 'secondary', 'placeholder', 'disabled'];
  textColors.forEach((type: string) =>
    rules.push([
      `text-${type}`,
      {
        color: uc.getCssvar(['text-color', type])
      }
    ])
  );
  return rules;
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
      primary: 'var(--hometown-primary)'
    }
  };
  return theme;
};
