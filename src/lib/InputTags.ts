import Container from './Container'
import Tag from './Tag'

interface InputTagsOptions {
  placeholder?: string
  errorMessage?: string
  tagValidator?: RegExp
}

type UpdateListener = (tags: ReturnType<InputTags['getTags']>) => void

export default class InputTags {
  private tags: Tag[] = []
  private updateListeners = new Map<UpdateListener, UpdateListener>()
  private container!: Container
  private options: Required<InputTagsOptions> = {
    tagValidator: /\S+@\S+\.\S+/,
    placeholder: 'add more people...',
    errorMessage:
      'emails-input which should be implemented as a reusable component',
  }

  public constructor(target: HTMLInputElement, options?: InputTagsOptions) {
    if (!this.checkTarget(target)) {
      throw new Error('Invalid tag name')
    }

    if (options) {
      this.options = Object.entries(options).reduce(
        (collection, [key, value]) => {
          return !value || !(key in this.options)
            ? collection
            : {
                ...collection,
                [key]: value,
              }
        },
        {} as Required<InputTagsOptions>,
      )
      Object.assign(this.options, options)
    }

    this.renderContainer(target)
    this.fillTags()
    this.onError()
  }

  public get hasError() {
    return this.tags.some(({ data: { isValid } }) => !isValid)
  }

  private get inputValueTags() {
    return this.container.targetRef.value.split(',').map(v => v.trim())
  }

  private fillTags() {
    const tags = this.inputValueTags

    tags.forEach(this.createTag)

    this.renderTags()
  }

  private checkTarget(target: HTMLElement) {
    return target.tagName === 'INPUT' && target.getAttribute('type') === 'text'
  }

  private onError() {
    this.container.setError(this.hasError)
  }

  private setInputValueTags() {
    const valueTags = this.tags
      .map(({ data: { content } }) => content)
      .join(',')

    this.container.targetRef.value = valueTags
  }

  private validateTag(content: string) {
    return this.options.tagValidator.test(content)
  }

  private removeTag = (tag: Tag) => {
    if (tag.ref?.parentNode) {
      tag.ref.parentNode.removeChild(tag.ref)
    }

    this.tags = this.tags.filter(t => t !== tag)

    this.onError()
    this.setInputValueTags()
    this.dispatchUpdateListener()
  }

  private createTag = (content: string) => {
    const tagProp = {
      content,
      isValid: this.validateTag(content),
    }

    const tag = new Tag(tagProp, {
      onRemove: this.removeTag,
    })

    this.tags.push(tag)

    return tag
  }

  private onAddTag = (value: string) => {
    const tag = this.createTag(value)
    this.container.renderTag(tag)
    this.onError()
    this.setInputValueTags()
    this.dispatchUpdateListener()

    const scrollRef = this.container.scrollRef

    scrollRef.scrollTop = scrollRef.scrollHeight - scrollRef.clientHeight
  }

  private renderContainer(targetRef: HTMLInputElement) {
    this.container = new Container(targetRef, {
      errorMessage: this.options.errorMessage,
      placeholder: this.options.placeholder,
      onAddTag: this.onAddTag,
    })
  }

  private renderTags() {
    this.container.renderTags(this.tags)
  }

  private dispatchUpdateListener() {
    const tags = this.getTags()

    this.updateListeners.forEach(listener => listener(tags))
  }

  public registerUpdateListener(listener: UpdateListener) {
    this.updateListeners.set(listener, listener)
  }

  public removeUpdateListener(listener: UpdateListener) {
    this.updateListeners.delete(listener)
  }

  public getTags() {
    return this.tags.map(({ data }) => ({ ...data }))
  }

  public setTag(value: string) {
    this.onAddTag(value)
  }

  public replaceTags(tags: string[]) {
    this.tags.forEach(this.removeTag)
    this.tags = tags.map(this.createTag)

    this.renderTags()

    this.dispatchUpdateListener()
  }
}
