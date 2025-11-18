import React, { useState, useEffect } from 'react';

interface Component4Props {
  title?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

/**
 * Component Example 4
 * 다양한 UI 패턴과 상호작용을 보여주는 예제 컴포넌트
 */
export const Component4: React.FC<Component4Props> = ({
  title = 'Example Component 4',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component 4 mounted');
    return () => console.log('Component 4 unmounted');
  }, []);

  const handleClick = () => {
    if (!disabled && !loading) {
      setIsActive(!isActive);
      setCount(count + 1);
      onClick?.();
    }
  };

  const getClassName = () => {
    const base = 'component-4';
    const classes = [base];
    
    if (variant) classes.push(`${base}--${variant}`);
    if (size) classes.push(`${base}--${size}`);
    if (isActive) classes.push(`${base}--active`);
    if (disabled) classes.push(`${base}--disabled`);
    if (loading) classes.push(`${base}--loading`);
    
    return classes.join(' ');
  };

  return (
    <div className={getClassName()} onClick={handleClick}>
      <h3>{title}</h3>
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <>
          <p>Clicked: {count} times</p>
          <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
          {children}
        </>
      )}
    </div>
  );
};

export default Component4;
