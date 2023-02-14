import { defaultNamespace } from './use-namespace';
/** cssvar */
export default function useCssvar() {
  function joinVarName(spaces: string[]): string {
    let name = `--${defaultNamespace}`;
    spaces.forEach(space => (name += `-${space}`));
    return name;
  }
  function getCssvarName(spaces: string[]): string {
    return joinVarName(spaces);
  }
  function getCssvar(spaces: string[]): string {
    return `var(${joinVarName(spaces)})`;
  }
  return {
    getCssvarName,
    getCssvar
  };
}
