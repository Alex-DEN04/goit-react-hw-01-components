import styled from '@emotion/styled'

export const Card = styled.li`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 250px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${p => p.theme.space[3]}px;
    padding: ${p => p.theme.space[3]}px;
    box-shadow: 1px 1px 1px 1px #bdb9b9;
    gap: 10px;
    
`
export const Status = styled.span`
    width: 16px;
    height: 16px;
    background-color: ${p =>
    p.isOnline ? p.theme.colors.chipColorOnline : p.theme.colors.chipColorOfline        
    };
    border-radius: ${p => p.theme.radii.round};
`
export const Avatar = styled.img`
    border-radius: ${p => p.theme.radii.normal};
`

export const FriendName = styled.p`
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.body};
    color: ${p => p.theme.colors.black};
    padding: ${p => p.theme.space[0]}px;
    margin: ${p => p.theme.space[0]}px;;
`