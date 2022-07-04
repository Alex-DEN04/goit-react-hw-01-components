import styled from '@emotion/styled';

export const Item = styled.tr`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBorder};
`;

export const Type = styled.td`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
  text-indent: 40%;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBorder};
  &::first-letter {
    text-transform: uppercase;
  }
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Amount = styled.td`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
  text-align: center;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBorder};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Currency = styled.td`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.secondary};
  text-align: center;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.tableBorder};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
`;
