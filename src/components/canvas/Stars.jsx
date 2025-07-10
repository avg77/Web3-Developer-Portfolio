import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

function generatePoints(count, radius = 1.2) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    let x = (Math.random() * 2 - 1);
    let y = (Math.random() * 2 - 1);
    let z = (Math.random() * 2 - 1);

    // normalize to inside sphere
    const length = Math.sqrt(x * x + y * y + z * z);
    if (length === 0) {
      x = y = z = 0;
    } else {
      x = (x / length) * Math.random() * radius;
      y = (y / length) * Math.random() * radius;
      z = (z / length) * Math.random() * radius;
    }

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }
  return positions;
}

const Stars = () => {
  const ref = useRef();
  const [positions] = useState(() => generatePoints(5000));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
