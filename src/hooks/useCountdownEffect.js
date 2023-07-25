import { useEffect } from "react";

const useCountdownEffect = (
    isCounting,
    minutes,
    seconds,
    handleStop,
    setPlayAlarm,
    setSeconds,
    setMinutes,
    setIsCounting
    ) => {
    useEffect(() => {
        let interval;
        const totalSeconds = minutes * 60 + seconds;

        if(isCounting && totalSeconds > 0) {
            interval = setInterval(()=>{
                if(seconds >0) {
                    setSeconds((prevSeconds) => prevSeconds - 1)
                } else if (minutes > 0){
                    setMinutes((prevMinutes)=>prevMinutes - 1);
                    setSeconds(59);
                }
            }, 1000)
        } else if (totalSeconds === 0 && isCounting) {
            setIsCounting(false);
            handleStop();

            setPlayAlarm(true)

            setTimeout(()=>{
                setPlayAlarm(false)
            }, 2000)
        }

        return () => clearInterval(interval);
    }, [isCounting,
        minutes,
        seconds,
        handleStop,
        setPlayAlarm,
        setSeconds,
        setMinutes,
        setIsCounting])
}

export default useCountdownEffect;