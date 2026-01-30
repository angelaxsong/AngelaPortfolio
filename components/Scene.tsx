
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial, Environment, Box } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  mousePos: { x: number; y: number };
}

export const Scene: React.FC<SceneProps> = ({ mousePos }) => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  // Calculate size to be exactly 1/16 of the viewport width
  // viewport.width is the units available horizontally at the camera distance
  const cubeSize = viewport.width / 16;

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
      
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} />
      <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} />
      
      <Environment preset="city" />

      {/* The Single Signature Dverso Cube */}
      <Box ref={cubeRef} args={[cubeSize, cubeSize, cubeSize]}>
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={cubeSize * 0.8}
          chromaticAberration={0.12}
          anisotropy={0.2}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.05}
          clearcoat={1}
          clearcoatRoughness={0}
          attenuationDistance={1.2}
          attenuationColor="#ffffff"
          color="#ffffff"
          ior={1.45}
          transmission={1}
        />
      </Box>

      {/* Perspective Grid Floor */}
      <gridHelper args={[100, 80, '#ffffff', '#ffffff']} position={[0, -6, 0]}>
        <meshStandardMaterial opacity={0.04} transparent />
      </gridHelper>
    </>
  );
};
