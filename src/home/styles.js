import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    place-items: center;
    justify-content: center;

    background-color: ${(props) => (props.isDark ? "#F8f8ff" : "#242424")}; 

    position: relative;

    > .darkButton {
      background: none;
      border: none;
      color: #FFFFFF;

      position: absolute;
      right: 50px;
      top: 50px;

      .moonButton {
        color: black;
      }
    }
`

export const Timer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
`

export const Timercount = styled.span`
    font-size: 96px;
    font-weight: bold;
    font-family: roboto;

    text-align:center;
    
    color: ${(props) => (props.isDark ? "#FFFFFF" : "#242424")};
`

export const Controls = styled.div`
    background:${({theme}) => theme.COLORS.BACKGROUND_900} ;

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
  color: #FFFFFF;

  .playSvg, .pauseSvg, .speakeOnSvg {
    color: #42D3FF;
  }
    
`;
