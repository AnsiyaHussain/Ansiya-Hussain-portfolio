import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { techSvgStrings } from '../utils/techIcons';

const tech = [
  { name: 'Python', key: 'Python', color: '#3776ab', pos: [-2.25, 1.15, .25] },
  { name: 'Django', key: 'Django', color: '#0c4b33', pos: [-.75, 1.75, -.25] },
  { name: 'DRF', key: 'DRF', color: '#b91c1c', pos: [1.05, 1.45, .05] },
  { name: 'React', key: 'React', color: '#61dafb', pos: [2.25, .75, -.2] },
  { name: 'PostgreSQL', key: 'PostgreSQL', color: '#336791', pos: [-2.25, -.35, -.1] },
  { name: 'JavaScript', key: 'JavaScript', color: '#f7df1e', pos: [-1.2, -1.35, .15] },
  { name: 'Git', key: 'Git', color: '#f05032', pos: [.15, -1.65, -.15] },
  { name: 'Docker', key: 'Docker', color: '#2496ed', pos: [1.55, -1.15, .1] },
  { name: 'Angular', key: 'Angular', color: '#dd0031', pos: [2.45, -.35, -.35] },
  { name: 'HTML5', key: 'HTML5', color: '#e34f26', pos: [-2.9, .55, -.5] },
  { name: 'CSS3', key: 'CSS3', color: '#1572b6', pos: [.55, -.75, -.65] },
];

function useSvgTexture(svgString) {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    if (!svgString) return;
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 256, 256);
      ctx.drawImage(img, 0, 0, 256, 256);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      setTexture(tex);
      URL.revokeObjectURL(url);
    };

    img.src = url;
  }, [svgString]);

  return texture;
}

function TileIcon({ svgKey }) {
  const svgString = techSvgStrings[svgKey];
  const texture = useSvgTexture(svgString);

  if (!texture) return null;

  return (
    <mesh position={[0, 0.08, 0.076]}>
      <planeGeometry args={[0.55, 0.55]} />
      <meshBasicMaterial map={texture} transparent opacity={1} side={THREE.DoubleSide} />
    </mesh>
  );
}

function Tile({ item, index }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.elapsedTime;
      ref.current.rotation.y = Math.sin(t * .45 + index) * .09;
      ref.current.rotation.x = Math.cos(t * .35 + index) * .04;
    }
  });

  return (
    <Float speed={1 + index * .025} floatIntensity={.45} rotationIntensity={.12} floatingRange={[-.08, .08]}>
      <group ref={ref} position={item.pos} scale={.72}>
        <RoundedBox args={[1, 1, .14]} radius={.16} smoothness={5}>
          <meshStandardMaterial color="#ffffff" roughness={.28} metalness={.02} />
        </RoundedBox>
        <TileIcon svgKey={item.key} />
        <Text position={[0, -.32, .08]} fontSize={item.name.length > 9 ? .075 : .09} color="#0a1730" anchorX="center" anchorY="middle" fontWeight={600}>
          {item.name}
        </Text>
      </group>
    </Float>
  );
}

function Core() {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * .06;
  });
  return (
    <group ref={ref}>
      <RoundedBox args={[1.35, 1.35, .18]} radius={.2} smoothness={5}>
        <meshPhysicalMaterial color="#f8fbff" roughness={.18} transmission={.15} transparent opacity={.94} />
      </RoundedBox>
      <Text position={[0, .25, .1]} fontSize={.17} color="#0a1730" anchorX="center" fontWeight={700}>CODE</Text>
      <Text position={[0, 0, .1]} fontSize={.17} color="#1769ff" anchorX="center" fontWeight={700}>BUILD</Text>
      <Text position={[0, -.25, .1]} fontSize={.17} color="#0a1730" anchorX="center" fontWeight={700}>GROW</Text>
      <mesh rotation={[1.1, .2, .4]}>
        <torusGeometry args={[1.75, .009, 12, 100]} />
        <meshStandardMaterial color="#82b3ff" transparent opacity={.35} />
      </mesh>
      <mesh rotation={[.35, .8, -.45]}>
        <torusGeometry args={[2.2, .007, 12, 100]} />
        <meshStandardMaterial color="#bfd8ff" transparent opacity={.32} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[4, 5, 6]} intensity={1.7} />
      <pointLight position={[-3, 2, 4]} intensity={.7} color="#9fc5ff" />
      <Core />
      {tech.map((item, index) => (
        <Tile key={item.name} item={item} index={index} />
      ))}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={.06}
        rotateSpeed={.22}
        autoRotate
        autoRotateSpeed={.12}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.9}
      />
    </>
  );
}

export default function FloatingTech() {
  return (
    <div className="floating-tech">
      <Canvas camera={{ position: [0, 0, 6.7], fov: 44 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
