import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HomeButton = ({ name }) => {
  return (
    <StyledWrapper>
      <Link href={`/${name.toLowerCase()}`} className="uiverse">
        <div className="wrapper">
          <span>{name}</span>
          <div className="circle circle-12" />
          <div className="circle circle-11" />
          <div className="circle circle-10" />
          <div className="circle circle-9" />
          <div className="circle circle-8" />
          <div className="circle circle-7" />
          <div className="circle circle-6" />
          <div className="circle circle-5" />
          <div className="circle circle-4" />
          <div className="circle circle-3" />
          <div className="circle circle-2" />
          <div className="circle circle-1" />
        </div>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .uiverse {
    --duration: 7s;
    --easing: linear;
    --c-color-1: rgba(11, 99, 70, 0.7); /* emerald-800 with alpha */
    --c-color-2: #93c5fd; /* blue-300 */
    --c-color-3: #fffbeb; /* amber-50 */
    --c-color-4: rgba(190, 242, 100, 0.7); /* lime-300 with alpha */
    --c-shadow: rgba(190, 242, 100, 0.5); /* lime-300 with alpha */
    --c-shadow-inset-top: rgba(190, 242, 100, 0.9);
    --c-shadow-inset-bottom: rgba(235, 252, 171, 0.8);
    --c-radial-inner: #bef264; /* lime-300 */
    --c-radial-outer: #d9f99d; /* lighter lime */
    --c-color: #065f46; /* emerald-800 for text */

    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    outline: none;
    position: relative;
    cursor: pointer;
    border: none;
    display: block;
    border-radius: 24px;
    min-width: 350px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 0.02em;
    line-height: 1.5;
    color: var(--c-color);
    background: radial-gradient(
      circle,
      var(--c-radial-inner),
      var(--c-radial-outer) 80%
    );
    box-shadow: 0 0 14px var(--c-shadow);
    width: 100%;
    max-width: 500px;
  }

  .uiverse:before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 3;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    width:350px;
    box-shadow:
      inset 0 3px 12px var(--c-shadow-inset-top),
      inset 0 -3px 4px var(--c-shadow-inset-bottom);
  }

  .uiverse .wrapper {
    position: relative; /* Necesario para ubicar .circle dentro */
    overflow: hidden;
    border-radius: 24px;
    min-width: 350px;
    padding: 24px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .uiverse .wrapper span {
    display: inline-block;
    position: relative;
    z-index: 2;
  }

  .uiverse:hover {
    --duration: 1400ms;
  }

  .uiverse .wrapper .circle {
    position: absolute;
    top: 50%;
    left: 25%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    filter: blur(var(--blur, 8px));
    background: var(--background, transparent);
    transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
    animation: var(--animation, none) var(--duration) var(--easing) infinite;
    z-index: 1;
  }

  /* Circle Colors & Blur Config */
  .circle.circle-1,
  .circle.circle-9,
  .circle.circle-10 {
    --background: var(--c-color-4);
  }

  .circle.circle-3,
  .circle.circle-4 {
    --background: var(--c-color-2);
    --blur: 14px;
  }

  .circle.circle-5,
  .circle.circle-6 {
    --background: var(--c-color-3);
    --blur: 16px;
  }

  .circle.circle-2,
  .circle.circle-7,
  .circle.circle-8,
  .circle.circle-11,
  .circle.circle-12 {
    --background: var(--c-color-1);
    --blur: 12px;
  }

  /* Position & Animation Config */
  .circle.circle-1 { --x: 0; --y: -40px; --animation: circle-1; }
  .circle.circle-2 { --x: 92px; --y: 8px; --animation: circle-2; }
  .circle.circle-3 { --x: -12px; --y: -12px; --animation: circle-3; }
  .circle.circle-4 { --x: 80px; --y: -12px; --animation: circle-4; }
  .circle.circle-5 { --x: 12px; --y: -4px; --animation: circle-5; }
  .circle.circle-6 { --x: 56px; --y: 16px; --animation: circle-6; }
  .circle.circle-7 { --x: 8px; --y: 28px; --animation: circle-7; }
  .circle.circle-8 { --x: 28px; --y: -4px; --animation: circle-8; }
  .circle.circle-9 { --x: 20px; --y: -12px; --animation: circle-9; }
  .circle.circle-10 { --x: 64px; --y: 16px; --animation: circle-10; }
  .circle.circle-11 { --x: 4px; --y: 4px; --animation: circle-11; }
  .circle.circle-12 { --blur: 14px; --x: 52px; --y: 4px; --animation: circle-12; }

  /* Keyframes */
  @keyframes circle-1 {
    33% { transform: translate(0px, 16px) translateZ(0); }
    66% { transform: translate(12px, 64px) translateZ(0); }
  }

  @keyframes circle-2 {
    33% { transform: translate(80px, -10px) translateZ(0); }
    66% { transform: translate(72px, -48px) translateZ(0); }
  }

  @keyframes circle-3 {
    33% { transform: translate(20px, 12px) translateZ(0); }
    66% { transform: translate(12px, 4px) translateZ(0); }
  }

  @keyframes circle-4 {
    33% { transform: translate(76px, -12px) translateZ(0); }
    66% { transform: translate(112px, -8px) translateZ(0); }
  }

  @keyframes circle-5 {
    33% { transform: translate(84px, 28px) translateZ(0); }
    66% { transform: translate(40px, -32px) translateZ(0); }
  }

  @keyframes circle-6 {
    33% { transform: translate(28px, -16px) translateZ(0); }
    66% { transform: translate(76px, -56px) translateZ(0); }
  }

  @keyframes circle-7 {
    33% { transform: translate(8px, 28px) translateZ(0); }
    66% { transform: translate(20px, -60px) translateZ(0); }
  }

  @keyframes circle-8 {
    33% { transform: translate(32px, -4px) translateZ(0); }
    66% { transform: translate(56px, -20px) translateZ(0); }
  }

  @keyframes circle-9 {
    33% { transform: translate(20px, -12px) translateZ(0); }
    66% { transform: translate(80px, -8px) translateZ(0); }
  }

  @keyframes circle-10 {
    33% { transform: translate(68px, 20px) translateZ(0); }
    66% { transform: translate(100px, 28px) translateZ(0); }
  }

  @keyframes circle-11 {
    33% { transform: translate(4px, 4px) translateZ(0); }
    66% { transform: translate(68px, 20px) translateZ(0); }
  }

  @keyframes circle-12 {
    33% { transform: translate(56px, 0px) translateZ(0); }
    66% { transform: translate(60px, -32px) translateZ(0); }
  }
`;

export default HomeButton;
