import styled from '@emotion/styled'

export const Avatar = styled.img`
    width: 100px;
    border-radius: ${p => p.theme.radii.round};
    padding: ${p => p.theme.space[4]}px;
`

export const UserName = styled.p`
    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.heading};
    color: ${p => p.theme.colors.black};
    padding: ${p => p.theme.space[2]}px;
    margin: ${p => p.theme.space[0]};
`

export const Address = styled.p`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.text};
    padding: ${p => p.theme.space[2]}px;
    margin: ${p => p.theme.space[0]};
`

export const Item = styled.li`
    width: 80px;
    height: 80px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.border};
    padding: ${p => p.theme.space[0]}px;
    background-color: ${p => p.theme.colors.background};
    :not(:first-child) {
        border-left: ${p => p.theme.borders.normal};
        border-color: ${p => p.theme.colors.border};
}
`
export const Stats = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.xs};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.text};

`
export const Quantity = styled.span`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.bold};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.text};
`