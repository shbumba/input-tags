import styles from 'src/styles.scss'

export enum Views {
  BASE = 'base',
  TAG = 'tag',
}

const views: { [key in Views]: string } = {
  [Views.BASE]: `
    <div class="${styles['input-tags']}">
      <div class="${styles['input-tags__base-input']}">
        {{baseInput}}
      </div>
      <div class="${styles['input-tags__error']}">
        <div class="${styles['input-tags__error-message']}">
          {{errorMessage}}
        </div>
      </div>
      <div class="${styles['input-tags__scroll']}">
        <div class="${styles['input-tags__controls']}">
          <div class="${styles['input-tags__input']}">
            <input type="text" placeholder="{{placeholder}}"/>
          </div>
        </div>
      </div>
    </div>
    `,
  [Views.TAG]: `
    <div class="${styles['input-tags__tag']}">
        <div class="${styles['input-tags__tag-content']}">{{content}}</div>
        <div class="${styles['input-tags__tag-close']}"></div>
      </div>
    `,
}

export default views
