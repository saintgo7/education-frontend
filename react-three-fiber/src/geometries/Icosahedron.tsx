import React from 'react';
import { useRef } from 'react';
import { Mesh } from 'three';

export const ${file} = () => {
  const meshRef = useRef<Mesh>(null);
  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};
