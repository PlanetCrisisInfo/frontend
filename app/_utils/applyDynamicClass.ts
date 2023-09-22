type ApplyDynamicClassProps = {
  styles: { readonly [key: string]: string }
  utilClass: string | undefined
}
export const applyDynamicClass = ({
  styles,
  utilClass,
}: ApplyDynamicClassProps): string | undefined => {
  return utilClass ? styles[utilClass] : undefined
}
