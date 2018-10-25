/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import { tablet, overlay, overflow_touch } from '../utilities/mixins'
import Button from '../elements/Button'
import Delete from '../elements/Delete'


BULMA_VARS({
  'modal-z': 40,

  get 'modal-background-background-color'() { return rgba(this['black'], 0.86) },

  'modal-content-width': '640px',
  'modal-content-margin-mobile': '20px',
  'modal-content-spacing-mobile': '160px',
  'modal-content-spacing-tablet': '40px',

  'modal-close-dimensions': '40px',
  'modal-close-right': '20px',
  'modal-close-top': '20px',

  'modal-card-spacing': '40px',

  get 'modal-card-head-background-color'() { return this['background'] },
  get 'modal-card-head-border-bottom'() { return `1px solid ${this['border']}` },
  'modal-card-head-padding': '20px',
  get 'modal-card-head-radius'() { return this['radius-large'] },

  get 'modal-card-title-color'() { return this['text-strong'] },
  'modal-card-title-line-height': 1,
  get 'modal-card-title-size'() { return this['size-4'] },

  get 'modal-card-foot-radius'() { return this['radius-large'] },
  get 'modal-card-foot-border-top'() { return `1px solid ${this['border']}` },

  get 'modal-card-body-background-color'() { return this['white'] },
  'modal-card-body-padding': '20px',
})


export default class Modal extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${overlay()}
    align-items: center;
    display: none;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    z-index: ${theme['modal-z']};
    /* Modifiers */
    &.is-active {
      display: flex;
    }
  `
}


export class ModalBackground extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${overlay()}
    background-color: ${theme['modal-background-background-color']};
  `
}

Modal.Background = ModalBackground

const ContentCardShared = theme => css`
  margin: 0 ${theme['modal-content-margin-mobile']};
  max-height: calc(100vh - ${theme['modal-content-spacing-mobile']});
  overflow: auto;
  position: relative;
  width: 100%;
  /* Responsiveness */
  ${tablet(theme)`
    margin: 0 auto;
    max-height: calc(100vh - ${theme['modal-content-spacing-tablet']});
    width: ${theme['modal-content-width']};
  `}
`

export class ModalContent extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => ContentCardShared(theme)
}

Modal.Content = ModalContent

export class ModalClose extends BaseWithConsumer {
  static defaultProps = {
    as: 'button',
  }

  static Style = theme => css`
    ${Delete.Style(theme)}
    background: none;
    height: ${theme['modal-close-dimensions']};
    position: fixed;
    right: ${theme['modal-close-right']};
    top: ${theme['modal-close-top']};
    width: ${theme['modal-close-dimensions']};
  `
}

Modal.Close = ModalClose

export class ModalCard extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${ContentCardShared(theme)}
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - ${theme['modal-card-spacing']});
    overflow: hidden;
  `
}

Modal.Card = ModalCard

const CardHeadFootShared = theme => css`
  align-items: center;
  background-color: ${theme['modal-card-head-background-color']};
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: ${theme['modal-card-head-padding']};
  position: relative;
`

export class ModalCardHead extends BaseWithConsumer {
  static defaultProps = {
    as: 'header',
  }

  static Style = theme => css`
    ${CardHeadFootShared(theme)}
    border-bottom: ${theme['modal-card-head-border-bottom']};
    border-top-left-radius: ${theme['modal-card-head-radius']};
    border-top-right-radius: ${theme['modal-card-head-radius']};
  `
}

Modal.Card.Head = ModalCardHead

export class ModalCardTitle extends BaseWithConsumer {
  static defaultProps = {
    as: 'p',
  }

  static Style = theme => css`
    color: ${theme['modal-card-title-color']};
    flex-grow: 1;
    flex-shrink: 0;
    font-size: ${theme['modal-card-title-size']};
    line-height: ${theme['modal-card-title-line-height']};
  `
}

Modal.Card.Title = ModalCardTitle

export class ModalCardFoot extends BaseWithConsumer {
  static defaultProps = {
    as: 'footer',
  }

  static Style = theme => css`
    ${CardHeadFootShared(theme)}
    border-bottom-left-radius: ${theme['modal-card-foot-radius']};
    border-bottom-right-radius: ${theme['modal-card-foot-radius']};
    border-top: ${theme['modal-card-foot-border-top']};
    .${/* sc-selector */Button.name} {
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  `
}

Modal.Card.Foot = ModalCardFoot

export class ModalCardBody extends BaseWithConsumer {
  static defaultProps = {
    as: 'section',
  }

  static Style = theme => css`
    ${overflow_touch}
    background-color: ${theme['modal-card-body-background-color']};
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
    padding: ${theme['modal-card-body-padding']};
  `
}

Modal.Card.Body = ModalCardBody
