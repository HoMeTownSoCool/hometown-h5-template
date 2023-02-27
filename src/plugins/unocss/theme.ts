import useCssvar from '../../hooks/use-cssvar';

export const createTheme = function createTheme() {
  const uc = useCssvar();
  const theme = {
    colors: {
      primary: uc.getCssvar(['color', 'primary'])
    }
  };
  return theme;
};
