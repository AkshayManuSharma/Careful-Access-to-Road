import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import { Ground } from "./Ground";


function carShow(){
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <perspectiveCamera makeDefault fov={50} position={[3,2,5]}/>

     {/*Set backgrobd color*/}
     <color args={'0,0,0'} attach='background'/>
     {/*Declare a spotlight.set properties*/}
     <spotLight
     color={[1,0.25,0.7]}
     intensity={1.5}
     angle={0.6}
     penumbra={0.5}
     position={[5,5,0]}
     castShadow
     shadow-bias={-0.0001}
     />

<spotLight
     color={[0.14,0.25,0.7]}
     intensity={1.5}
     angle={0.6}
     penumbra={0.5}
     position={[-5,5,0]}
     castShadow
     shadow-bias={-0.0001}
     />

<Ground/>

    </>

    
  );

}

function App() {
  return (
    <Suspense fallback={[null]}>
      <Canvas shadows>
        <carShow/>
      </Canvas>
    </Suspense>
  );
}

export default App;