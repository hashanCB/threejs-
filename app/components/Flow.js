"use client";
import { useEffect, useRef } from "react";
import p5 from "p5";

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(400, 400);
    p.background(0);
    p.circle(200, 200, 400);
  };

  p.draw = function () {
    // your draw code here
  };
}

function App() {
  // create a reference to the container in which the p5 instance should place the canvas
  const p5ContainerRef = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="App" ref={p5ContainerRef} />;
}

export default App;
