import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
`

export const Timer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
`

export const Timercount = styled.span`
    font-size: 96px;
    font-weight: bold;
    font-family: roboto;

    text-align:center;

    color: ${({theme}) => theme.COLORS.WHITE};
`

export const Controls = styled.div`
    background:${({theme}) => theme.COLORS.BACKGROUND_800} ;

    border-radius: 9999px;
    width: 300px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
`

export const StyledButton = styled.button`
  border: none;
  background:none;
  cursor: pointer;

  .playSvg, .pauseSvg {
    color: #42D3FF;
  }

  .StopSvg, .ClockSvg {
    color: white;
  }

  .speakeOnSvg {
    color: #42D3FF;
  }

  .speakeOffSvg {
    color: white;
  }
    
`;
