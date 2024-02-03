"use client";
import {
  Center,
  Clone,
  Cloud,
  ContactShadows,
  Environment,
  Float,
  Line,
  OrbitControls,
  Point,
  PointMaterial,
  Sky,
  Sparkles,
  Text,
  Text3D,
} from "@react-three/drei";
import React from "react";
import { useThree } from "react-three-fiber";
import { Model } from "./Model";

const Seen = () => {
  const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sparkles count={100} size={4} scale={[width, height, 3]} />
      <Environment preset="city" />
      <Model />

      <Float>
        <Center position-y={1}>
          <Text3D
            position-x={2}
            scale={[0.7, 0.7, -1]}
            font={"./Protest Riot_Regular.json"}
          >
            <meshStandardMaterial
              color={"#b32a2a"}
              envMapIntensity={2} //make a gritness look on text
              roughness={0.2}
            />
            Hashan Chanaka
          </Text3D>
        </Center>

        <Center position-y={-1}>
          <Text3D font={"./Protest Riot_Regular.json"}>
            <meshStandardMaterial
              color={"#b32a2a"}
              envMapIntensity={2}
              roughness={0.2}
            />
            2024
          </Text3D>
        </Center>
      </Float>
    </>
  );
};

export default Seen;
