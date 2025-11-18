import React, { useState, useEffect, useRef } from 'react';

/**
 * Animation Example 3
 * CSS 및 JavaScript 애니메이션 기법
 */

export function Animation3() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (isAnimating) {
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        // Animate multiple properties
        setPosition({
          x: Math.sin(elapsed / 1000) * 100,
          y: Math.cos(elapsed / 1000) * 100,
        });
        setRotation((elapsed / 10) % 360);
        setScale(1 + Math.sin(elapsed / 500) * 0.5);
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAnimating]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const reset = () => {
    setIsAnimating(false);
    setPosition({ x: 0, y: 0 });
    setRotation(0);
    setScale(1);
  };

  return (
    <div className="animation-demo-3">
      <h3>Animation Example 3</h3>
      
      <div className="controls">
        <button onClick={toggleAnimation}>
          {isAnimating ? 'Pause' : 'Start'} Animation
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="animation-container">
        <div
          className="animated-element"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
            transition: isAnimating ? 'none' : 'all 0.3s ease',
          }}
        >
          <div className="element-content">
            Element 3
          </div>
        </div>
      </div>

      <div className="info">
        <p>Position: ({position.x.toFixed(0)}, {position.y.toFixed(0)})</p>
        <p>Rotation: {rotation.toFixed(0)}°</p>
        <p>Scale: {scale.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Animation3;
