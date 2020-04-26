interface InputOptions {
  onAddTag(value: string): void
}

export default class Input {
  public ref: HTMLInputElement
  private options: InputOptions

  public constructor(inputRef: HTMLInputElement, options: InputOptions) {
    this.ref = inputRef
    this.options = options

    this.registerEvents()
  }

  private onValueUpdate(value: string) {
    const preparedValue = value.trim()

    this.ref.value = ''

    if (preparedValue) {
      this.options.onAddTag(preparedValue)
    }

    return !!preparedValue
  }

  private registerEvents() {
    this.ref.addEventListener('keypress', this.onKeyPress)
    this.ref.addEventListener('paste', this.onPaste)
    this.ref.addEventListener('focusout', this.onFocusOut)
  }

  private onKeyPress = (event: KeyboardEvent) => {
    if (!['Enter', ','].some(c => c === event.key)) {
      return
    }

    this.onValueUpdate(this.ref.value)

    event.preventDefault()
  }

  private onFocusOut = () => {
    const value = this.ref.value.trim()

    this.onValueUpdate(value)
  }

  private onPaste = (event: ClipboardEvent) => {
    const clipboardData =
      event.clipboardData || ((window as any).clipboardData as DataTransfer)

    if (!clipboardData) {
      return
    }

    const values = clipboardData
      .getData('Text')
      .split(',')
      .map(v => v.trim())

    if (values.length) {
      values.forEach(this.options.onAddTag)

      event.preventDefault()
    }
  }
}
