export function getStaticUrl(name) {
  return new URL('./assets/'+name, import.meta.url).href
}