export function extractPathname(url: string): string {
  const pattern = /https?:\/\/[^\/]+(\/.*)/
  const match = url.match(pattern)
  return match ? match[1] : ""
}
