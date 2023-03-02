import { DEFAULT_NAMESPACE } from '../const';
/** cssvar */
export default function useCssvar() {
  function joinVarName(spaces: string[]): string {
    let name = `--${DEFAULT_NAMESPACE}`;
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
