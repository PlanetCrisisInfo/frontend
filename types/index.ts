export type ComponentProps<T> = T

export type Component<T> = React.FC<ComponentProps<T>>

export type PageProps = {
  params: any
  searchParams?: any
}

export type ThemeMode = "happy" | "sad" | "neutral"
