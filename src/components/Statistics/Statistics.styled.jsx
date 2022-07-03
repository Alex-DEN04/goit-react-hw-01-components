import styled from '@emotion/styled'

export const Item = styled.li`
    background-color: ${p => {
    switch (p.bgColor) {
        case 'id-1':
            return p.theme.colors.backgroundFirst;
        case 'id-2':
            return p.theme.colors.backgroundSecond;
        case 'id-3':
            return p.theme.colors.backgroundThird;
        case 'id-4':
            return p.theme.colors.backgroundFourth;
        case 'id-5':
            return p.theme.colors.backgroundFirst;
        default:  
            return p.theme.colors.backgroundSecond;
        }
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
`
export const Title = styled.h2`
    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.heading};
    color: ${p => p.theme.colors.text};
    text-transform: uppercase;
    text-align: center;
    width: 500px;
    margin: 0;
    padding-top: ${p => p.theme.space[5]}px;
    padding-bottom: ${p => p.theme.space[5]}px;
`

export const Label = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.white};
`
export const Percentage = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.white};
    
`