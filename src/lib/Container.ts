import { Views } from '../views'
import { createView, prepareView } from 'src/utils'
import Input from './Input'
import Tag from './Tag'
import styles from 'src/styles.scss'

interface ContainerOptions {
  placeholder: string
  errorMessage: string
  onAddTag(value: string): void
}

export default class Container {
  public targetRef: HTMLInputElement
  public containerRef!: HTMLDivElement
  public scrollRef!: HTMLDivElement
  public controlsRef!: HTMLDivElement
  public inputContainerRef!: HTMLDivElement
  public errorRef!: HTMLDivElement
  public input!: Input

  private options: ContainerOptions

  public constructor(targetRef: HTMLInputElement, options: ContainerOptions) {
    this.targetRef = targetRef
    this.options = options

    this.render()
    this.setRefs()
    this.initInput()
    this.registerEvents()
  }

  private render() {
    if (this.containerRef) {
      return this.containerRef
    }

    const template = prepareView(Views.BASE, {
      baseInput: this.targetRef.outerHTML,
      errorMessage: this.options.errorMessage,
      placeholder: this.options.placeholder,
    })

    const containerRef = createView<HTMLDivElement>(template)

    this.containerRef = containerRef

    this.targetRef.parentNode?.replaceChild(this.containerRef, this.targetRef)
  }

  private setRefs() {
    this.scrollRef = this.containerRef.querySelector<HTMLDivElement>(
      `.${styles['input-tags__scroll']}`,
    )!
    this.controlsRef = this.containerRef.querySelector<HTMLDivElement>(
      `.${styles['input-tags__controls']}`,
    )!
    this.inputContainerRef = this.containerRef.querySelector<HTMLDivElement>(
      `.${styles['input-tags__input']}`,
    )!
    this.targetRef = this.containerRef.querySelector<HTMLInputElement>(
      `.${styles['input-tags__base-input']} input`,
    )!
    this.errorRef = this.containerRef.querySelector<HTMLDivElement>(
      `.${styles['input-tags__error']}`,
    )!
  }

  private initInput() {
    const inputRef = this.inputContainerRef.querySelector<HTMLInputElement>(
      'input',
    )!

    this.input = new Input(inputRef, {
      onAddTag: this.options.onAddTag,
    })
  }

  private registerEvents() {
    this.controlsRef.addEventListener('click', event => {
      if (event.currentTarget === event.target) {
        this.input.ref.focus()
      }
    })
  }

  public setError(error: boolean) {
    this.errorRef.classList[error ? 'add' : 'remove'](
      `${styles['input-tags__error--show']}`,
    )
  }

  public renderTag = (tag: Tag) => {
    this.controlsRef.insertBefore(tag.render(), this.inputContainerRef)
  }

  public renderTags(tags: Tag[]) {
    tags.forEach(this.renderTag)
  }
}
