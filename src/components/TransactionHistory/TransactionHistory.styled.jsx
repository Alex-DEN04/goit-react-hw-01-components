import styled from '@emotion/styled'

export const Table = styled.table`
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 1px #bdb9b9;
    border: 1px solid ${p => p.theme.colors.tableBorder};
    border-collapse: collapse; 
    table-layout: fixed;
    margin-bottom: 20px;
`

export const Header = styled.thead`
    height: 40px;
    background-color: #83d4f2;
    border: 1px solid ${p => p.theme.colors.tableBorder};
`

export const Title = styled.th`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.white};
    text-transform: uppercase;
    text-align: center;
    border: 1px solid ${p => p.theme.colors.tableBorder};
`
export const TableBody = styled.tbody`
    &:nth-of-type(odd){
	        background-color: ${p => p.theme.colors.tableBackgroundFirst}};
    &:nth-of-type(even){
	        background-color: ${p => p.theme.colors.tableBackgroundSecond}};
`