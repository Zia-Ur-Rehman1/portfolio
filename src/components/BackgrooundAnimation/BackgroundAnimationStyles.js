import styled from 'styled-components';

export const BgAnimationContainer = styled.div`
    z-index: 1;
    grid-row: 1;
    grid-column: 2;
    @media ${(props) => props.theme.breakpoints.md} {
      grid-row: 2;
    }

`