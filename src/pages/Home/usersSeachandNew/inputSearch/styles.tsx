import { primary } from '../../../../providers/styles/colors';

export const buttonSx = {
    backgroundColor: primary,
    height: '32px',
    width: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

}

export const inputSx = {
    paddingTop: '5px',
    paddingBottom: '5px',
    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: primary,
        // borderWidth: 0,
    },
    '.MuiOutlinedInput-notchedOutline': {
        borderColor: '#dee2e6',
    },
}
