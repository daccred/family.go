import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, MeshReflectorMaterial, BakeShadows } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { Instances, Computers } from "./Computers";

import { useRootRef } from "../use-root-ref";

export default function Animation() {
  const rootRef = useRootRef();

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [-1.5, 1, 5.5], fov: 45, near: 1, far: 20 }}
      // eventSource={document.getElementById('__next')}
      eventSource={rootRef.current}
      eventPrefix="client"
    >
      {/* Lights */}
      <color attach="background" args={["black"]} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Main scene */}
      <group position={[-0, -1, 0]}>
        {/* Auto-instanced sketchfab model */}
        <Instances>
          <Computers scale={0.5} />
        </Instances>
        {/* Plane reflections + distance blur */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#202020"
            metalness={0.8}
          />
        </mesh>
        {/* Bunny and a light give it more realism */}
        <Bun
          scale={0.325}
          position={[0, 0, 0.5]}
          rotation={[0, -Math.PI * 0.85, 0]}
        />
        <pointLight
          distance={1.5}
          intensity={1}
          position={[-0.15, 0.7, 0]}
          color="orange"
        />
      </group>
      {/* Postprocessing */}
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0}
          mipmapBlur
          luminanceSmoothing={0.0}
          intensity={6}
        />
        <DepthOfField
          target={[0, 0, 13]}
          focalLength={0.3}
          bokehScale={15}
          height={700}
        />
      </EffectComposer>
      {/* Camera movements */}
      <CameraRig />
      {/* Small helper that freezes the shadows for better performance */}
      <BakeShadows />
    </Canvas>
  );
}

function Bun(props) {
  const { nodes } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bunny/model.gltf"
  );
  return (
    <mesh receiveShadow castShadow geometry={nodes.bunny.geometry} {...props}>
      <meshStandardMaterial color="#222" roughness={0.5} />
    </mesh>
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 3,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}
