import views, { Views } from '../views'

export const prepareView = (key: Views, options: { [key: string]: any }) => {
  let template = views[key]

  Object.entries(options).forEach(([key, value]) => {
    template = template.replace(`{{${key}}}`, value)
  })

  return template
}

export const createView = <T extends HTMLElement>(template: string) => {
  const dom = document.createElement('div')

  dom.innerHTML = template.trim()

  return dom.firstChild as T
}
