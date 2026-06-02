import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: ${(props) => props.theme.colors.techRadial};
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 4rem;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 15px;
  }

  @media ${props => props.theme.breakpoints.xs}{
    display: flex;
    flex-direction: column;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.textBright};
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.div`
  font-size: 18px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.textTertiary};

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: row;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
}
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

export const CategoryHeading = styled.h3`
  font-size: 28px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.textBright};
  margin: 2.5rem 0 1.25rem;
  text-align: center;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 22px;
    margin: 2rem 0 1rem;
  }
`

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto 1rem;
  max-width: 1100px;
  padding: 0 1rem;

  @media ${props => props.theme.breakpoints.sm} {
    gap: 0.6rem;
  }
`

export const Pill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: ${(props) =>
    props.isActive ? props.theme.colors.borderInputFocus : props.theme.colors.cardBg};
  border: 2px solid ${(props) =>
    props.isActive ? props.theme.colors.borderInputFocus : props.theme.colors.borderSoft};
  color: ${(props) =>
    props.isActive ? props.theme.colors.textOnGradient : props.theme.colors.textBright};
  font-family: inherit;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.borderInputFocus};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.borderInputFocusGlow};
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.65rem 1.1rem;
    font-size: 1.05rem;
    gap: 0.55rem;
  }
`

export const PillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  svg {
    display: block;
  }
`

export const PillLabel = styled.span`
  white-space: nowrap;
`

export const TierBadge = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.5rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textBright};
  background: ${(props) => {
    if (props.tier === 'daily') return 'rgba(34, 197, 94, 0.18)';
    if (props.tier === 'production') return 'rgba(59, 130, 246, 0.2)';
    return 'rgba(148, 163, 184, 0.2)';
  }};
  border: 1px solid ${(props) => {
    if (props.tier === 'daily') return 'rgba(34, 197, 94, 0.5)';
    if (props.tier === 'production') return 'rgba(59, 130, 246, 0.5)';
    return 'rgba(148, 163, 184, 0.45)';
  }};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.7rem;
    padding: 0.1rem 0.45rem;
  }
`

export const TierLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
  margin: 0 auto 1.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textTertiary};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }

  i {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    font-style: normal;
  }

  i.daily { background: rgba(34, 197, 94, 0.7); }
  i.production { background: rgba(59, 130, 246, 0.7); }
  i.fluent { background: rgba(148, 163, 184, 0.7); }
`

export const DetailPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  max-width: 800px;
  margin: 0.75rem auto 2rem;
  padding: 1.1rem 1.4rem;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.cardBg};
  border: 1px solid ${(props) => props.theme.colors.borderInputFocus};
  box-shadow: ${(props) => props.theme.colors.shadowMd};
  animation: skillDetailFadeIn 0.25s ease;

  @keyframes skillDetailFadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1rem 1.2rem;
    gap: 1rem;
  }
`

export const DetailIcon = styled.div`
  flex-shrink: 0;
  color: ${(props) => props.theme.colors.borderInputFocus};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`

export const DetailTitle = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textBright};
`

export const DetailDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textTertiary};
`
