
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface SceneProps {
  mousePos: { x: number; y: number };
}

export const Scene: React.FC<SceneProps> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);
  const characterRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePos.x * 0.3, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mousePos.y * 0.2, 0.05);
    }
    if (characterRef.current) {
      characterRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    }
  });

  return (
    <>
      <color attach="background" args={['#0047FF']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <spotLight position={[-10, 20, 10]} angle={0.2} penumbra={1} intensity={3} castShadow />
      
      <Environment preset="city" />

      <group ref={groupRef}>
        {/* Main Character Placeholder (Chrome Wizard Figure) */}
        <group ref={characterRef} position={[2, 0, 0]} scale={1.5}>
          {/* Head */}
          <Sphere args={[0.4, 32, 32]} position={[0, 0.8, 0]}>
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.05} />
          </Sphere>
          
          {/* Wizard Hat (Cone) */}
          <mesh position={[0, 1.4, 0]} rotation={[0.1, 0, 0.1]}>
            <coneGeometry args={[0.3, 0.8, 32]} />
            <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} />
          </mesh>

          {/* Dress/Body (Distorted Sphere for fabric look) */}
          <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[0.7, 64, 64]} position={[0, 0, 0]} scale={[1, 1.2, 1]}>
              <MeshDistortMaterial
                color="#ffffff"
                speed={2}
                distort={0.3}
                radius={1}
                metalness={1}
                roughness={0.1}
              />
            </Sphere>
          </Float>

          {/* Wand with Star */}
          <group position={[-0.6, 0.2, 0.3]} rotation={[0, 0, 0.5]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.8]} />
              <meshStandardMaterial color="#ffffff" metalness={1} />
            </mesh>
            <mesh position={[0, 0.45, 0]}>
              <octahedronGeometry args={[0.1, 0]} />
              <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
            </mesh>
          </group>
        </group>

        {/* Floating Geometric Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Float
            key={i}
            speed={Math.random() * 2 + 1}
            rotationIntensity={Math.random() * 5}
            floatIntensity={Math.random() * 2}
          >
            <mesh position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10
            ]}>
              <icosahedronGeometry args={[Math.random() * 0.2, 0]} />
              <meshStandardMaterial color="#ffffff" metalness={1} roughness={0.1} wireframe={Math.random() > 0.5} />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Grid floor for depth */}
      <gridHelper args={[50, 50, '#ffffff', '#ffffff']} position={[0, -5, 0]} rotation={[0, 0, 0]}>
        <meshStandardMaterial opacity={0.1} transparent />
      </gridHelper>
    </>
  );
};
