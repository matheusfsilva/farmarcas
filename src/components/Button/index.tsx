/* eslint-disable no-nested-ternary */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import { styled } from '@mui/material/styles';
import ButtonMaterial, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { primary, blackCustom, primaryHover, blackCustomHover, danger, dangerHover } from '../../providers/styles/colors'

interface _Button extends ButtonProps {
  target?: string,
  variantButton: 'none' | 'contained' | 'outlined',
  colorButton?: 'primary' | 'grey' | 'blackCustom' | 'grey700' | 'white' | 'danger'
}
export default function Button({ target, variantButton, colorButton, ...props }: _Button) {

  function getColor() {
    if (colorButton === 'primary') {
      return primary;
    }
    if (colorButton === 'blackCustom') {
      return blackCustom;
    }
    if (colorButton === 'grey700') {
      return grey[700]
    }
    if (colorButton === 'white') {
      return 'white'
    }
    if (colorButton === 'danger') {
      return danger
    }
    return primary
  }

  function getContrastText() {
    if (colorButton === 'primary') {
      return 'white';
    }
    if (colorButton === 'blackCustom') {
      return 'white';
    }
    if (colorButton === 'grey700') {
      return 'white'
    }
    if (colorButton === 'white') {
      return blackCustom
    }
    if (colorButton === 'danger') {
      return 'white'
    }
    return primary
  }

  function getHover() {
    if (colorButton === 'primary') {
      return primaryHover;
    }
    if (colorButton === 'blackCustom') {
      return blackCustomHover;
    }
    if (colorButton === 'grey700') {
      return grey[600]
    }
    if (colorButton === 'white') {
      return grey[100]
    }
    if (colorButton === 'danger') {
      return dangerHover
    }
    return primary
  }

  const ColorButton = styled(ButtonMaterial)<ButtonProps>(() => ({
    color: getContrastText(),
    backgroundColor: getColor(),
    fontFamily: 'Lato, Helvetica, sans-serif',
    fontWeight: 400,
    fontSize: '16px',
    minWidth: '20px',
    borderRadius: '8px',
    lineHeight: '25px',
    '&:hover': {
      backgroundColor: getHover(),
    },
  }));

  const TextButton = styled(ButtonMaterial)<ButtonProps>(() => ({
    color: getColor(),
    fontFamily: 'Lato, Helvetica, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '17px',
    minWidth: '20px',
    '&:hover': {
      backgroundColor: grey[100],
    },
  }));

  const OutlinedButton = styled(ButtonMaterial)<ButtonProps>(() => ({
    color: grey[700],
    fontFamily: 'Lato, Helvetica, sans-serif',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '17px',
    border: '2px solid',
    borderRadius: '10px',
    minWidth: '20px',
    padding: '10px',
    borderColor: grey[100],
    '&:hover': {
      backgroundColor: grey[100],
    },
  }));

  return (
    variantButton === 'contained' ?
      <ColorButton {...props} /> :
      variantButton === 'outlined' ?
        <OutlinedButton {...props} /> :
        <TextButton {...props} />
  );
}
