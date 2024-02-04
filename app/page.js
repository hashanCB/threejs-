"use client";
import Image from "next/image";
import FlowFieldSketch from "./components/Flow.js";
export default function Home() {
  return (
    <div className=" h-[100vh] overflow-hidden">
      <FlowFieldSketch />
    </div>
  );
}
