/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import { tablet, overlay, overflow_touch } from '../utilities/mixins'
import { DeleteStyle, Button } from '../'


Vars.addDerivedDefault(vars => ({
  'modal-z': 40,

  'modal-background-background-color': rgba(vars['black'], 0.86),

  'modal-content-width': '640px',
  'modal-content-margin-mobile': '20px',
  'modal-content-spacing-mobile': '160px',
  'modal-content-spacing-tablet': '40px',

  'modal-close-dimensions': '40px',
  'modal-close-right': '20px',
  'modal-close-top': '20px',

  'modal-card-spacing': '40px',

  'modal-card-head-background-color': vars['background'],
  'modal-card-head-border-bottom': `1px solid ${vars['border']}`,
  'modal-card-head-padding': '20px',
  'modal-card-head-radius': vars['radius-large'],

  'modal-card-title-color': vars['text-strong'],
  'modal-card-title-line-height': 1,
  'modal-card-title-size': vars['size-4'],

  'modal-card-foot-radius': vars['radius-large'],
  'modal-card-foot-border-top': `1px solid ${vars['border']}`,

  'modal-card-body-background-color': vars['white'],
  'modal-card-body-padding': '20px',
}))

const defaultProps = { theme: Vars.getVariables() }

export const Modal = styled.div`
  ${overlay}
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: ${fromTheme('modal-z')};
  /* Modifiers */
  &.is-active {
    display: flex;
  }
`
Modal.defaultProps = defaultProps

export const ModalBackground = styled.div`
  ${overlay}
  background-color: ${fromTheme('modal-background-background-color')};
`
ModalBackground.defaultProps = defaultProps
Modal.Background = ModalBackground

const ContentCardShared = css`
  margin: 0 ${fromTheme('modal-content-margin-mobile')};
  max-height: calc(100vh - ${fromTheme('modal-content-spacing-mobile')});
  overflow: auto;
  position: relative;
  width: 100%;
  /* Responsiveness */
  ${tablet`
    margin: 0 auto;
    max-height: calc(100vh - ${fromTheme('modal-content-spacing-tablet')});
    width: ${fromTheme('modal-content-width')};
  `}
`

export const ModalContent = styled.div`${ContentCardShared}`
ModalContent.defaultProps = defaultProps
Modal.Content = ModalContent

export const ModalClose = styled.button`
  ${DeleteStyle}
  background: none;
  height: ${fromTheme('modal-close-dimensions')};
  position: fixed;
  right: ${fromTheme('modal-close-right')};
  top: ${fromTheme('modal-close-top')};
  width: ${fromTheme('modal-close-dimensions')};
`
ModalClose.defaultProps = defaultProps
Modal.Close = ModalClose

export const ModalCard = styled.div`
  ${ContentCardShared}
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - ${fromTheme('modal-card-spacing')});
  overflow: hidden;
`
ModalCard.defaultProps = defaultProps
Modal.Card = ModalCard

const CardHeadFootShared = css`
  align-items: center;
  background-color: ${fromTheme('modal-card-head-background-color')};
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: ${fromTheme('modal-card-head-padding')};
  position: relative;
`

export const ModalCardHead = styled.header`
  ${CardHeadFootShared}
  border-bottom: ${fromTheme('modal-card-head-border-bottom')};
  border-top-left-radius: ${fromTheme('modal-card-head-radius')};
  border-top-right-radius: ${fromTheme('modal-card-head-radius')};
`
ModalCardHead.defaultProps = defaultProps
Modal.Card.Head = ModalCardHead

export const ModalCardTitle = styled.p`
  color: ${fromTheme('modal-card-title-color')};
  flex-grow: 1;
  flex-shrink: 0;
  font-size: ${fromTheme('modal-card-title-size')};
  line-height: ${fromTheme('modal-card-title-line-height')};
`
ModalCardTitle.defaultProps = defaultProps
Modal.Card.Title = ModalCardTitle

export const ModalCardFoot = styled.footer`
  ${CardHeadFootShared}
  border-bottom-left-radius: ${fromTheme('modal-card-foot-radius')};
  border-bottom-right-radius: ${fromTheme('modal-card-foot-radius')};
  border-top: ${fromTheme('modal-card-foot-border-top')};
  ${/* sc-selector */Button} {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`
ModalCardFoot.defaultProps = defaultProps
Modal.Card.Foot = ModalCardFoot

export const ModalCardBody = styled.section`
  ${overflow_touch}
  background-color: ${fromTheme('modal-card-body-background-color')};
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: ${fromTheme('modal-card-body-padding')};
`
ModalCardBody.defaultProps = defaultProps
Modal.Card.Body = ModalCardBody
