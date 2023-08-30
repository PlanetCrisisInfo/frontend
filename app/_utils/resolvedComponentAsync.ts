export const resolvedComponentAsync = async (Component, props) => {
  const ComponentResolved = await Component(props)
  return () => ComponentResolved
}
