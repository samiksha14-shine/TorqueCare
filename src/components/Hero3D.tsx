/* src/components/Hero3D.tsx - Enhanced without GLB dependency */
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, Cylinder, Box } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function CarMockup() {
  const carRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (carRef.current) {
      carRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={carRef}>
      {/* Car body */}
      <Box args={[3.5, 1.2, 7]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#2D3748" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Wheels */}
      <Cylinder args={[0.8, 0.8, 0.3, 16]} position={[-1.2, 0, 2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1A1A1A" />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.3, 16]} position={[1.2, 0, 2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1A1A1A" />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.3, 16]} position={[-1.2, 0, -2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1A1A1A" />
      </Cylinder>
      <Cylinder args={[0.8, 0.8, 0.3, 16]} position={[1.2, 0, -2]} rotation={[0, 0, Math.PI/2]}>
        <meshStandardMaterial color="#1A1A1A" />
      </Cylinder>
      
      {/* Windshield */}
      <Box args={[3.2, 0.8, 0.1]} position={[0, 1.4, 1.5]}>
        <meshStandardMaterial color="#87CEEB" transparent opacity={0.7} />
      </Box>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[400px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-surface to-surface-alt">
      <Canvas camera={{ position: [8, 4, 8], fov: 50 }}>
        <color attach="background" args={['#0F1629']} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={1} />
        
        <Suspense fallback={null}>
          <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <CarMockup />
          </PresentationControls>
          
          <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2.5} far={4.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
