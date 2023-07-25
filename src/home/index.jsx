import { useState } from "react";
import { Container, Controls, Timer, Timercount, StyledButton } from "./styles"

import { AiOutlinePlayCircle, AiOutlineClockCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { PiSpeakerNone,PiSpeakerHigh } from "react-icons/pi";
import { LiaStopCircleSolid }from "react-icons/lia";

import alarmSound from "../assets/alarm.mp3"
import useCountdownEffect from "../hooks/useCountdownEffect";

export function App() {
    const [isCounting, setIsCounting] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isStopVisible, setIsStopVisible] = useState(false);
    const [isClockVisible, setIsClockVisible] = useState(true);
    const [isSoundOn, setIsSoundOn] = useState(true);

    const [playAlarm, setPlayAlarm] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const handlePlay = () => {
      setIsCounting((prevIsCounting) => !prevIsCounting);
    };
  
    const handleClock = () => {
      const newMinutesInput = prompt(
        "Digite o novo valor dos minutos:",
        String(minutes)
      );
      const newMinutes = parseInt(newMinutesInput || "0", 10);
    
      const newSecondsInput = prompt(
        "Digite o novo valor dos segundos:",
        String(seconds)
      );
      const newSeconds = parseInt(newSecondsInput || "0", 10);
    
      if (newMinutes === 0 && newSeconds === 0) {
        handleStop();
        return;
      }
    
      if (!isNaN(newMinutes) && !isNaN(newSeconds)) {
        setMinutes(newMinutes);
        setSeconds(newSeconds);
        setIsStopVisible(true);
        setIsClockVisible(false);
      }
    };
  
    const handleStop = () => {
      setMinutes(0);
      setSeconds(0);
      setIsCounting(false);
      setIsClockVisible(true);
      setIsStopVisible(false);
    };
  
    const handleSoundToggle = () => {
      setIsSoundOn((prevIsSoundOn) => !prevIsSoundOn);
        setIsMuted(!isMuted);
    };
  
    const calculateTotalSeconds = () => {
      return minutes * 60 + seconds;
    };
  
    useCountdownEffect(
      isCounting,
      minutes,
      seconds,
      handleStop,
      setPlayAlarm,
      setSeconds,
      setMinutes,
      setIsCounting);
  
    const formatTime = (timeInSeconds) => {
      return {
        formattedMinutes: String(Math.floor(timeInSeconds / 60)).padStart(2, "0"),
        formattedSeconds: String(timeInSeconds % 60).padStart(2, "0")
      };
    };
  
    const { formattedMinutes, formattedSeconds } = formatTime(
      calculateTotalSeconds()
    );

    return (
        <Container>
            <Timer>
                <Timercount>
                    <span>{formattedMinutes}</span>
                    :
                    <span>{formattedSeconds}</span>
                </Timercount>

                <Controls>
                        <StyledButton
                            onClick={handlePlay}
                            >
                                {isCounting ? (
                                    <AiOutlinePauseCircle className="pauseSvg" size={64} />
                                ) : (
                                    <AiOutlinePlayCircle className="playSvg" size={64} />
                                )}
                        </StyledButton>

                        {isClockVisible && (
                            <StyledButton onClick={handleClock}>
                                <AiOutlineClockCircle className="ClockSvg" size={64} />
                            </StyledButton>
                        )}

                        {isStopVisible && (
                            <StyledButton onClick={handleStop}>
                                <LiaStopCircleSolid className="StopSvg" size={64} />
                            </StyledButton>
                        )}

                        <StyledButton
                            onClick={handleSoundToggle}
                            >
                                {isSoundOn ? (
                                    <PiSpeakerHigh className="speakeOnSvg" size={64} />
                                ) : (
                                    <PiSpeakerNone className="speakeOffSvg" size={64} />
                                )}
                        </StyledButton>

                </Controls>
            </Timer>

            {playAlarm && <audio autoPlay src={alarmSound} muted={isMuted} />}
        </Container>
    )
}