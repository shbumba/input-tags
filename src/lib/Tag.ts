import { Views } from '../views'
import { createView, prepareView } from 'src/utils'
import styles from 'src/styles.scss'

interface TagData {
  content: string
  isValid: boolean
}

interface TagOptions {
  onRemove(tag: Tag): void
}

export default class Tag {
  public ref?: HTMLDivElement
  public data: TagData
  private options: TagOptions

  public constructor(data: TagData, options: TagOptions) {
    this.data = data
    this.options = options
  }

  private registerEvents() {
    if (!this.ref) {
      return
    }

    this.ref
      .querySelector(`.${styles['input-tags__tag-close']}`)!
      .addEventListener('click', this.onRemove)
  }

  private onRemove = () => {
    if (!this.ref) {
      return
    }

    this.options.onRemove(this)
  }

  public render() {
    if (this.ref) {
      return this.ref
    }

    const template = prepareView(Views.TAG, {
      content: this.data.content,
    })

    const templateDom = createView<HTMLDivElement>(template)

    if (!this.data.isValid) {
      templateDom.classList.add(`${styles['input-tags__tag--invalid']}`)
    }

    this.ref = templateDom

    this.registerEvents()

    return this.ref
  }
}
