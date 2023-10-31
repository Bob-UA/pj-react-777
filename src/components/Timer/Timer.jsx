import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useState, useEffect } from 'react';

import sprite from '../../sprite/sprite.svg';
import {
  BoxTimer,
  BurnedCalories,
  ButtonPause,
  CaloriesWrapper,
  IconPause,
  Number,
  TextTime,
} from './Timer.styled';

const Timer = ({ setDinamicBurnCal, burnedCalories }) => {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(180);

  const toggleTimer = () => {
    setTimerIsRunning((prev) => !prev);
  };

  useEffect(() => {
    if (timerIsRunning) {
      const timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timerIsRunning]);

  const calculateBurnedCalories = (remainingTime) => {
    const currentBurnedCalories = Math.round(
      (180 - remainingTime) * (burnedCalories / 180),
    );
    setDinamicBurnCal(currentBurnedCalories);
    return currentBurnedCalories;
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <>
      <BoxTimer>
        <TextTime>Time</TextTime>
        <CountdownCircleTimer
          colors={['#E6533C']}
          strokeWidth={4}
          size={124}
          isPlaying={timerIsRunning}
          duration={180}
          onComplete={() => setTimerIsRunning(false)}
        >
          {({ remainingTime }) => (
            <div style={{ color: '#fff' }} role="timer" aria-live="assertive">
              {`${formatTime(Math.floor(remainingTime / 60))}:${formatTime(
                remainingTime % 60,
              )}`}
            </div>
          )}
        </CountdownCircleTimer>
        <ButtonPause type="button" onClick={toggleTimer}>
          <IconPause>
            <use
              href={
                timerIsRunning ? `${sprite}#icon-pause` : `${sprite}#icon-play`
              }
            ></use>
          </IconPause>
        </ButtonPause>
        <CaloriesWrapper>
          <BurnedCalories>Burned calories:</BurnedCalories>
          <Number>{calculateBurnedCalories(remainingTime)}</Number>
        </CaloriesWrapper>
      </BoxTimer>
    </>
  );
};

export default Timer;
