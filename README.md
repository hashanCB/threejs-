https://github.com/hashanCB/threejs---100DaysOfCode/assets/45811945/25f693f4-60d9-44cc-9273-e6d7fde1fb56

## Description

This project utilizes [React Three Fiber](https://github.com/pmndrs/react-three-fiber) and [Poimandres drei](https://github.com/pmndrs/drei) packages to create a dynamic and visually appealing 3D scene. The scene is built with React components and powered by the Three.js library.

## Components

### `flow.js`

```jsx
import React from "react";
import { Canvas } from "react-three-fiber";
import Seen from "./Seen";

const Flow = () => {
  return (
    <Canvas className="bg-black">
      <Seen />
    </Canvas>
  );
};

export default Flow;
```

### `Seen.js`

```jsx
import {
  Center,
  Float,
  Sparkles,
  Text3D,
} from "@react-three/drei";
import React from "react";
import { useThree } from "react-three-fiber";
import { Model } from "./Model";
import { MathUtils } from "three";

const Seen = () => {
  const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <>
      {/* Lights and Environment */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sparkles count={100} size={4} scale={[width, height, 3]} />
      <Environment preset="city" />

      {/* Render Models */}
      {Array.from({ length: 20 }).map((item, index) => (
        <Model
          key={index}
          position={[
            MathUtils.randFloatSpread(width),
            MathUtils.randFloatSpread(height),
            MathUtils.randFloat(-3, 1),
          ]}
          color={index % 2 === 0 ? "blue" : "yellow"}
        />
      )}

      {/* Floating Text */}
      <Float>
        <Center position-y={1}>
          <Text3D
            position-x={2}
            scale={[0.7, 0.7, -1]}
            font="./Protest Riot_Regular.json"
          >
            Hashan Chanaka
          </Text3D>
        </Center>

        <Center position-y={-1}>
          <Text3D font="./Protest Riot_Regular.json">2024</Text3D>
        </Center>
      </Float>
    </>
  );
};

export default Seen;
```

### `Model.js`

```jsx
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/model.gltf");
  const ref = useRef();
  const { viewport, camera } = useThree();
  const { height } = viewport.getCurrentViewport(camera, [
    0,
    0,
    props.position[2],
  ]);

  useFrame(() => {
    ref.current.position.y += 0.01;
    ref.current.rotation.y += 0.002;
    ref.current.rotation.x += 0.002;

    if (ref.current.position.y > height / 1.4) {
      ref.current.position.y = -height / 1.3;
    }
  });

  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.star.geometry}
        material={materials["Yellow.030"]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          {...materials["Yellow.030"]}
          color={props.color}
          envMapIntensity={2}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/model.gltf");
```


## tech Information

- The project uses Three.js and React Three Fiber for 3D rendering.
- Poimandres drei package is used for helpful React Three Fiber components.
- Text in 3D requires fonts in JSON format, generated through [typeface.json](http://gero3.github.io/facetype.js).
- GLTF file is used for the 3D model, and the gltfjsx tool is used to convert it into JSX components.
