/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import InputSearch from '../pages/Home/usersSeachandNew/inputSearch'
// import { useContextProvider } from '../providers/context/contextProvider'

describe('Test Pesquisa ', () => {
    it('tem isso?', () => {
        const { getByPlaceholderText, getByTestId } = render(<InputSearch />)
        const inputPesquisa = getByPlaceholderText('pesquisaTesteId');
        const buttonPesquisa = getByTestId('button');
        userEvent.type(inputPesquisa, 'Matheus')
        userEvent.click(buttonPesquisa)
        // existem os elementos?s
        expect(getByPlaceholderText('pesquisaTesteId')).toBeTruthy()
    })
})