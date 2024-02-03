"use client";
import React from "react";
import { Canvas } from "react-three-fiber";
import Seen from "./Seen";
const flow = () => {
  return (
    <Canvas className=" bg-black">
      <Seen />
    </Canvas>
  );
};

export default flow;
