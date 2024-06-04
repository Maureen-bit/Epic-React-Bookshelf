import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/core'
import {Dialog as ReachDialog} from '@reach/dialog'
import * as mq from 'styles/media-queries'
import * as color from 'styles/colors'
import {FaSpinner} from 'react-icons/fa'

const Button = styled.button(props => ({
  padding: '10px 15px',
  border: '0',
  lineHeight: '1',
  borderRadius: '3px',
  color: props.variant === 'primary' ? color.base : color.text,
  backgroundColor: props.variant === 'primary' ? color.indigo : color.gray,
  ':hover': {
    backgroundColor: props.variant === 'primary' ? color.indigoLighten80 : color.gray80,
  }
}))

const Input = styled.input({
  borderRadius: '3px',
  border: `1px solid ${color.gray10}`,
  background: color.gray,
  padding: '8px 12px',
})

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerParent = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: #ba8aba purple purple purple;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'}
})

const Spinner = styled(FaSpinner)({
  fontSize: '30px',
  animation: `${spin} 1s linear infinite`
})

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: color.base,
  color: color.text,
  border: `1px solid ${color.gray10}`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  [mq.small]: {
    width: '100%',
    margin: '10vh auto',
   }
})

export {CircleButton, Dialog, Button, Input, FormGroup, SpinnerParent, Container, Spinner}
