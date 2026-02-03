
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Box, Preload } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  mousePos: { x: number; y: number };
}

export const Scene: React.FC<SceneProps> = ({ mousePos }) => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  // Responsive sizing with a sensible minimum/maximum to prevent clipping
  const cubeSize = useMemo(() => {
    return Math.min(Math.max(viewport.width / 16, 0.8), 2.5);
  }, [viewport.width]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cubeRef.current) {
      // Subtle hovering animation
      cubeRef.current.position.y = Math.sin(t * 0.4) * 0.15;
      
      // Mouse interaction + continuous rotation
      const targetRotationX = -mousePos.y * 0.6 + t * 0.1;
      const targetRotationY = mousePos.x * 0.6 + t * 0.12;
      
      cubeRef.current.rotation.x = THREE.MathUtils.lerp(cubeRef.current.rotation.x, targetRotationX, 0.06);
      cubeRef.current.rotation.y = THREE.MathUtils.lerp(cubeRef.current.rotation.y, targetRotationY, 0.06);
      cubeRef.current.rotation.z = THREE.MathUtils.lerp(cubeRef.current.rotation.z, t * 0.05, 0.06);
    }
  });

  return (
    <>
      <color attach="background" args={['#0047FF']} />
      
      {/* Robust base lighting to prevent "black box" syndrome during texture loading */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#0047FF" />
      
      <Environment preset="city" />

      {/* The Single Signature Angela XS Cube */}
      <Box ref={cubeRef} args={[cubeSize, cubeSize, cubeSize]}>
        <MeshTransmissionMaterial
          backside
          samples={8} // Optimized samples for performance
          thickness={cubeSize * 0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0}
          distortionScale={0.1}
          temporalDistortion={0}
          clearcoat={1}
          clearcoatRoughness={0.1}
          attenuationDistance={1}
          attenuationColor="#ffffff"
          color="#ffffff"
          ior={1.2}
          transmission={1}
        />
      </Box>

      {/* Perspective Grid Floor */}
      <gridHelper args={[100, 80, '#ffffff', '#ffffff']} position={[0, -6, 0]}>
        <meshStandardMaterial opacity={0.04} transparent />
      </gridHelper>

      <Preload all />
    </>
  );
};
