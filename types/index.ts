export type Component<T> = React.FC<T>

export type PageProps = {
  params: any
  searchParams?: any
}

export type ThemeMode = "happy" | "sad" | "neutral"
