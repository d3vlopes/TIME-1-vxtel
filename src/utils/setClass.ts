export const setClass = (
  classes: string[],
  styles: Record<string, unknown>,
) => {
  return classes.map((className) => styles[className]).join(' ')
}
