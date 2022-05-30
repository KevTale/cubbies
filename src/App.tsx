import { OrbitControls, useFBX } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";

function BodyFBX() {
  let fbx = useFBX("body.fbx");
  return <primitive scale={0.005} object={fbx} />;
}
function EyesFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/eyes.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}
function TailFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/tail.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}
function LegsFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/legs.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}
function NoseFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/nose.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}
function EarsFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/ears.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}
function SideFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/side.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}
function TopFBX({ species }: { species: string }) {
  let fbx = useFBX(`${species}/top.fbx`);
  return <primitive scale={0.005} object={fbx} />;
}

function App() {
  const [cubbie, setCubbie] = useState({
    top: "chicken",
    eyes: "elephant",
    tail: "chicken",
    legs: "chicken",
    nose: "elephant",
    side: "",
    ears: "bear",
  });

  return (
    <div className="h-screen w-screen max-w-7xl mx-auto">
      <header className="p-4">
        <h1 className="text-5xl font-extrabold mb-12 text-white text-center">
          Cubbies
        </h1>
      </header>
      <div className="flex py-6">
        <div className="flex flex-col mx-auto shadow-xl bg-[#8dcef9] rounded-[28px] p-3">
          <div className="bg-white rounded-xl py-4 shadow-md">
            <div className="flex w-full justify-evenly text-xl mb-6">
              <p>👀🐘</p>
              <p>👃🐘</p>
              <p>👂🐘</p>
              <p>🦵🐘</p>
            </div>

            <Canvas
              className="!h-[18rem] !w-[20rem] mx-auto rounded-t-2xl"
              camera={{ position: [-5, 2, 10], fov: 9 }}
            >
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={5}
              />

              <BodyFBX />
              {cubbie.top && <TopFBX species={cubbie.top} />}
              {cubbie.ears && <EyesFBX species={cubbie.ears} />}
              {cubbie.tail && <TailFBX species={cubbie.tail} />}
              {cubbie.legs && <LegsFBX species={cubbie.legs} />}
              {cubbie.nose && <NoseFBX species={cubbie.nose} />}
              {cubbie.ears && <EarsFBX species={cubbie.ears} />}
              {cubbie.side && <SideFBX species={cubbie.side} />}

              {/* This light makes things look pretty */}
              <ambientLight intensity={1} />
              {/* Our main source of light, also casting our shadow */}
              <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.2}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
              {/* A light to help illumnate the spinning boxes */}
              {/* <pointLight position={[-10, 0, -20]} intensity={0.5} /> */}
              <pointLight position={[0, -10, 0]} intensity={0.8} />
            </Canvas>

            <div className="text-center mt-6">
              <p className="text-3xl text-[#7e96f4] font-extrabold ">Rare</p>
              <p className="">Mint #1278</p>
            </div>
            <div className="px-4">
              <p className="text-sm text-right">0x132456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
