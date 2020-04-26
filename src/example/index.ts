import './styles.example.scss'
;(async () => {
  await import('src/index')

  const getRandEmail = (length = 10) => {
    const maxLength = length - 2
    const rangString = [...Array(maxLength)].map(() =>
      (~~(Math.random() * 36)).toString(36),
    )

    const mailIndex = Math.round(maxLength * 0.33)
    const dotIndex = Math.round(maxLength * 0.66) + 1

    rangString.splice(mailIndex, 0, '@')
    rangString.splice(dotIndex, 0, '.')

    return rangString.join('')
  }

  const elem = document.getElementById('base-input')
  const addEmailBtn = document.getElementById('add-email')
  const getEmailCountBtn = document.getElementById('get-email-count')

  if (elem) {
    const tagsInput = new InputTags(elem as HTMLInputElement)

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
})()
