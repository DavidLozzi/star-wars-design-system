import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LightsaberProgressProps {
  progress: number; // 0-100
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const pulse = keyframes`
  0% {
    opacity: 0.85;
    transform: scaleY(1);
    filter: brightness(1);
  }
  100% {
    opacity: 1;
    transform: scaleY(1.2);
    filter: brightness(1.1);
  }
`;

const glow = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.8;
  }
`;

const spark = keyframes`
  0%, 90%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  45% {
    opacity: 1;
    transform: scale(2);
    box-shadow: 0 0 4px #ff0000;
  }
`;

const LightsaberContainer = styled.div<{ size: string }>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${props => {
    switch (props.size) {
      case 'small': return '300px';
      case 'large': return '600px';
      default: return '450px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '25px';
      case 'large': return '45px';
      default: return '35px';
    }
  }};
`;

const Hilt = styled.div<{ size: string }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '150px';
      case 'large': return '300px';
      default: return '225px';
    }
  }};
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const GripSection = styled.div<{ size: string }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '50px';
      case 'large': return '100px';
      default: return '80px';
    }
  }};
  height: 100%;
  background: linear-gradient(to bottom, #222, #111, #222);
  position: relative;
  margin-right: 3px;
  border-radius: 2px 0 0 2px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent 3px,
      rgba(255,255,255,0.1) 3px,
      rgba(255,255,255,0.1) 4px,
      transparent 4px,
      transparent 7px
    );
    border-radius: 2px;
  }
`;

const ActivationBox = styled.div<{ size: string }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '25px';
      case 'large': return '50px';
      default: return '35px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '28px';
      case 'large': return '48px';
      default: return '38px';
    }
  }};
  background: linear-gradient(to bottom, #333, #111, #333);
  border-radius: 3px;
  position: relative;
  margin-right: 3px;
  box-shadow: inset 0 1px 2px rgba(255,255,255,0.2);

  &::before {
    content: '';
    position: absolute;
    top: ${props => props.size === 'small' ? '6px' : props.size === 'large' ? '12px' : '8px'};
    left: ${props => props.size === 'small' ? '4px' : props.size === 'large' ? '8px' : '6px'};
    width: ${props => props.size === 'small' ? '17px' : props.size === 'large' ? '34px' : '23px'};
    height: ${props => props.size === 'small' ? '4px' : props.size === 'large' ? '8px' : '6px'};
    background: linear-gradient(to right, #444, #666, #444);
    border-radius: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    top: ${props => props.size === 'small' ? '14px' : props.size === 'large' ? '24px' : '18px'};
    left: ${props => props.size === 'small' ? '8px' : props.size === 'large' ? '16px' : '10px'};
    width: ${props => props.size === 'small' ? '3px' : props.size === 'large' ? '6px' : '4px'};
    height: ${props => props.size === 'small' ? '3px' : props.size === 'large' ? '6px' : '4px'};
    background: #ff0000;
    border-radius: 50%;
    box-shadow: 0 0 6px #ff0000;
  }
`;

const BodySection = styled.div<{ size: string }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '40px';
      case 'large': return '80px';
      default: return '60px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small' : return '22px';
      case 'large': return '42px';
      default: return '32px';
    }
  }};
  background: linear-gradient(to bottom, #555, #222, #444);
  border-radius: 2px;
  position: relative;
  margin-right: 2px;
  box-shadow: inset 0 2px 3px rgba(255,255,255,0.15);
`;

const Emitter = styled.div<{ size: string }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '30px';
      case 'large': return '60px';
      default: return '45px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '18px';
      case 'large': return '38px';
      default: return '28px';
    }
  }};
  background: linear-gradient(to bottom, #666, #333, #111);
  border-radius: 0 3px 3px 0;
  position: relative;
  z-index: 3;
  box-shadow: inset 0 2px 4px rgba(255,255,255,0.2);

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    width: ${props => props.size === 'small' ? '5px' : props.size === 'large' ? '12px' : '8px'};
    background: linear-gradient(to bottom, #444, #222);
    border-radius: 0 2px 2px 0;
  }
`;

const Blade = styled.div<{ progress: number; size: string }>`
  width: ${props => {
    const baseWidth = props.size === 'small' ? 200 : props.size === 'large' ? 500 : 350;
    return `${baseWidth * (props.progress / 100)}px`;
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '3px';
      case 'large': return '6px';
      default: return '4px';
    }
  }};
  background: linear-gradient(to right, 
    rgba(255,0,0,1) 0%,
    rgba(255,80,80,0.9) 30%,
    rgba(255,120,120,0.8) 70%,
    rgba(255,0,0,0.9) 100%
  );
  border-radius: 2px;
  position: relative;
  margin-left: 8px;
  animation: ${pulse} 2.5s ease-in-out infinite alternate;
  transition: width 0.5s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: 0;
    right: 0;
    bottom: -3px;
    background: linear-gradient(to right, 
      rgba(255,0,0,0.7) 0%,
      rgba(255,60,60,0.5) 30%,
      rgba(255,100,100,0.4) 70%,
      rgba(255,0,0,0.6) 100%
    );
    border-radius: 5px;
    filter: blur(3px);
  }

  &::after {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    bottom: -8px;
    background: linear-gradient(to right, 
      rgba(255,0,0,0.4) 0%,
      rgba(255,40,40,0.3) 30%,
      rgba(255,80,80,0.2) 70%,
      rgba(255,0,0,0.3) 100%
    );
    border-radius: 10px;
    filter: blur(8px);
  }
`;

const OuterGlow = styled.div<{ progress: number; size: string }>`
  position: absolute;
  top: 50%;
  left: ${props => {
    const hiltWidth = props.size === 'small' ? 150 : props.size === 'large' ? 300 : 225;
    return `${hiltWidth + 8}px`;
  }};
  transform: translateY(-50%);
  width: ${props => {
    const baseWidth = props.size === 'small' ? 200 : props.size === 'large' ? 500 : 350;
    return `${baseWidth * (props.progress / 100)}px`;
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '15px';
      case 'large': return '35px';
      default: return '25px';
    }
  }};
  background: radial-gradient(ellipse, rgba(255,0,0,0.3) 0%, transparent 70%);
  filter: blur(12px);
  animation: ${glow} 2.5s ease-in-out infinite alternate;
  transition: width 0.5s ease-in-out;
`;

const BladeTip = styled.div<{ size: string }>`
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  width: ${props => props.size === 'small' ? '8px' : props.size === 'large' ? '15px' : '10px'};
  height: ${props => props.size === 'small' ? '8px' : props.size === 'large' ? '15px' : '10px'};
`;

const Spark = styled.div<{ delay: number; size: string }>`
  position: absolute;
  width: 1px;
  height: 1px;
  background: #ff8888;
  border-radius: 50%;
  animation: ${spark} 2s infinite;
  animation-delay: ${props => props.delay}s;

  &:nth-child(1) {
    top: ${props => props.size === 'small' ? '1px' : props.size === 'large' ? '3px' : '2px'};
    left: ${props => props.size === 'small' ? '2px' : props.size === 'large' ? '4px' : '3px'};
  }

  &:nth-child(2) {
    top: ${props => props.size === 'small' ? '5px' : props.size === 'large' ? '10px' : '7px'};
    left: ${props => props.size === 'small' ? '4px' : props.size === 'large' ? '8px' : '6px'};
  }

  &:nth-child(3) {
    top: ${props => props.size === 'small' ? '3px' : props.size === 'large' ? '6px' : '4px'};
    left: ${props => props.size === 'small' ? '6px' : props.size === 'large' ? '12px' : '8px'};
  }
`;

const ProgressText = styled.div<{ size: string }>`
  position: absolute;
  top: ${props => props.size === 'small' ? '-30px' : props.size === 'large' ? '-50px' : '-40px'};
  left: 50%;
  transform: translateX(-50%);
  color: #ff0000;
  font-family: Arial, sans-serif;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '12px';
      case 'large': return '18px';
      default: return '14px';
    }
  }};
  font-weight: bold;
  text-shadow: 0 0 8px #ff0000;
  letter-spacing: 1px;
  z-index: 3;
`;

export const LightsaberProgress: React.FC<LightsaberProgressProps> = ({
  progress,
  size = 'medium',
  className
}) => {
  // Ensure progress is between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <LightsaberContainer size={size} className={className}>
      <Hilt size={size}>
        <GripSection size={size} />
        <ActivationBox size={size} />
        <BodySection size={size} />
        <Emitter size={size} />
      </Hilt>
      <Blade progress={clampedProgress} size={size}>
        <BladeTip size={size}>
          <Spark delay={0} size={size} />
          <Spark delay={0.5} size={size} />
          <Spark delay={1} size={size} />
        </BladeTip>
      </Blade>
      <OuterGlow progress={clampedProgress} size={size} />
      <ProgressText size={size}>
        {Math.round(clampedProgress)}%
      </ProgressText>
    </LightsaberContainer>
  );
};