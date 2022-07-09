// import { getCurrentInstance } from 'vue'
// import Bootstrap from 'bootstrap'
//
// let installed = false
await loadStyle()

// export function setupBootstrap() {
//   if (installed) return
//   const instance = getCurrentInstance()
//   instance.appContext.app.use(Bootstrap)
//   installed = true
// }

export function loadStyle() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '#BOOTSTRAP_STYLE#'
    link.addEventListener('load', resolve)
    link.addEventListener('error', reject)
    document.body.append(link)
  })
}
