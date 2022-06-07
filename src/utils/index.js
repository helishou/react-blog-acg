export function getStaticUrl(name) {
  return new URL('../assets/images/'+name, import.meta.url).href
}