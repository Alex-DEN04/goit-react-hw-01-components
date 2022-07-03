import styled from '@emotion/styled'

export const Item = styled.tr`
    /* text-align: center; */
    border: 1px solid #eee;    
    
`

export const Type = styled.td`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.secondary};
    text-indent: 80px;
    border: 1px solid ${p => p.theme.colors.tableBorder};
    &::first-letter {
        text-transform: uppercase;}
    padding-top: 10px;
    padding-bottom: 10px;
`

export const Amount = styled.td`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.secondary};
    text-align: center;
    border: 1px solid ${p => p.theme.colors.tableBorder};
    padding-top: 10px;
    padding-bottom: 10px;
    
`

export const Currency = styled.td`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.secondary};
    text-align: center;
    border: 1px solid ${p => p.theme.colors.tableBorder};
    padding-top: 10px;
    padding-bottom: 10px;
`