![Image of input-tags](https://github.com/shbumba/input-tags/raw/master/demo.png)
# input-tags
This library implements the functionality to enter tags into a regular text field.
### How to use? ###
Connect the input-tags library to your page.

```javascript
  const elem = document.getElementById('base-input')
  const addEmailBtn = document.getElementById('add-email')
  const getEmailCountBtn = document.getElementById('get-email-count')

  if (elem) {
    const tagsInput = new InputTags(elem)

    tagsInput.registerUpdateListener(tags => {
      console.log({ tags })
    })

    if (addEmailBtn) {
      addEmailBtn.addEventListener('click', () => {
        tagsInput.setTag(getRandEmail())
      })
    }

    if (getEmailCountBtn) {
      getEmailCountBtn.addEventListener('click', () => {
        alert(tagsInput.getTags().length)
      })
    }
  }

```
```html
  <input id="base-input" type="text" name="base-input"value="john@miro.com,invalid.email,mike@miro.com, alexander@miro.com" />
```
### Options ###
```javascript
new InputTags(elem, {
  placeholder: 'placeholder text',
  errorMessage: 'error message',
  tagValidator: /\S+@\S+\.\S+/
})
```

#### Available Options ####
* __placeholder__: input placeholder (default: "add more people...")
* __errorMessage__: Message displayed on error (default: "emails-input which should be implemented as a reusable component")
* __tagValidator__: RegExp to validate tag (default: "/\S+@\S+\.\S+/")
