// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3"; // Ensure this file exists in the src folder

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb"); // Ensure this file is in the public folder
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, color, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : color} />
//     </mesh>
//   );
// }

// // Ground component with terrain
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village huts
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// // Main App component
// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [alert, setAlert] = useState(false);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });

//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//   ]);

//   const villagePosition = [15, 0, 0]; // Target destination

//   // Move the elephant towards the village gradually
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prevPos) => {
//         const [x, y, z] = prevPos;
//         const speed = 0.2; // Movement speed

//         // Calculate direction toward the village
//         const directionX = villagePosition[0] - x;
//         const directionZ = villagePosition[2] - z;
//         const length = Math.sqrt(directionX ** 2 + directionZ ** 2);

//         if (length < 0.5) return prevPos; // Stop when close enough

//         return [
//           x + (directionX / length) * speed,
//           y,
//           z + (directionZ / length) * speed,
//         ];
//       });
//     }, 500);

//     return () => clearInterval(interval);
//   }, []);

//   // Check if elephant is detected by any sensor or near the village
//   useEffect(() => {
//     setSensors((prevSensors) =>
//       prevSensors.map((sensor) => {
//         const distance = Math.sqrt(
//           Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//             Math.pow(elephantPosition[2] - sensor.position[2], 2)
//         );
//         return { ...sensor, triggered: distance < 5 }; // Detection range
//       })
//     );

//     // Check if elephant is near the village
//     const distanceToVillage = Math.sqrt(
//       Math.pow(elephantPosition[0] - villagePosition[0], 2) +
//         Math.pow(elephantPosition[2] - villagePosition[2], 2)
//     );

//     if (distanceToVillage < 10) {
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }

//     setAlert(sensors.some((sensor) => sensor.triggered));
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} color="red" triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <pointLight position={[15, 5, 0]} intensity={1} color="yellow" distance={10} decay={2} />
//             <Text position={[15, 5, 0]} fontSize={1} color="red">
//               ALERT: Elephant near the village!
//             </Text>
//           </>
//         )}
//         {alert && (
//           <Text position={[0, 5, 0]} fontSize={1} color="red">
//             ALERT: Elephant detected near the sensors!
//           </Text>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment, Sparkles } from "@react-three/drei";
// import { PointLight } from "three"; // Correct import for PointLight
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3"; // Ensure this file is in the src folder

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb"); // Ensure this file is in the public folder
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, color, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : color} />
//     </mesh>
//   );
// }

// // Ground component with terrain
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village huts
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// // Main App component
// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [alert, setAlert] = useState(false);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//   ]);

//   // Simulate elephant movement
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition([
//         elephantPosition[0] + (Math.random() - 0.5),
//         elephantPosition[1],
//         elephantPosition[2] + (Math.random() - 0.5),
//       ]);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [elephantPosition]);

//   // Check if elephant is detected by any sensor
//   useEffect(() => {
//     const updatedSensors = sensors.map((sensor) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       return { ...sensor, triggered: distance < 5 }; // Detection range
//     });

//     setSensors(updatedSensors);

//     // Check if elephant is near the village
//     const villagePosition = [15, 0, 0];
//     const distanceToVillage = Math.sqrt(
//       Math.pow(elephantPosition[0] - villagePosition[0], 2) +
//       Math.pow(elephantPosition[2] - villagePosition[2], 2)
//     );

//     if (distanceToVillage < 10) { // Flashlight and bee sound range
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }

//     setAlert(updatedSensors.some((sensor) => sensor.triggered));
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor
//             key={index}
//             position={sensor.position}
//             color="red"
//             triggered={sensor.triggered}
//           />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <PointLight
//               position={[15, 5, 0]}
//               intensity={1}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={[15, 5, 0]} fontSize={1} color="red">
//               ALERT: Elephant near the village!
//             </Text>
//           </>
//         )}
//         {alert && (
//           <Text position={[0, 5, 0]} fontSize={1} color="red">
//             ALERT: Elephant detected near the sensors!
//           </Text>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment, Sparkles } from "@react-three/drei";
// import { PointLight } from "three"; // Correct import for PointLight
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3"; // Ensure this file is in the src folder

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb"); // Ensure this file is in the public folder
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, color, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : color} />
//     </mesh>
//   );
// }

// // Ground component with terrain
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village huts
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// // Main App component
// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [alert, setAlert] = useState(false);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//   ]);

//   // Simulate elephant movement towards the village
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prevPosition) => {
//         const villagePosition = [15, 0, 0];
//         const direction = [
//           villagePosition[0] - prevPosition[0],
//           villagePosition[1] - prevPosition[1],
//           villagePosition[2] - prevPosition[2],
//         ];
//         const speed = 0.1; // Adjust speed here
//         const newPosition = [
//           prevPosition[0] + direction[0] * speed,
//           prevPosition[1] + direction[1] * speed,
//           prevPosition[2] + direction[2] * speed,
//         ];
//         return newPosition;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Check if elephant is detected by any sensor
//   useEffect(() => {
//     const updatedSensors = sensors.map((sensor) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       return { ...sensor, triggered: distance < 5 }; // Detection range
//     });

//     setSensors(updatedSensors);

//     // Check if elephant is near the village
//     const villagePosition = [15, 0, 0];
//     const distanceToVillage = Math.sqrt(
//       Math.pow(elephantPosition[0] - villagePosition[0], 2) +
//       Math.pow(elephantPosition[2] - villagePosition[2], 2)
//     );

//     if (distanceToVillage < 10) { // Flashlight and bee sound range
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }

//     setAlert(updatedSensors.some((sensor) => sensor.triggered));
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor
//             key={index}
//             position={sensor.position}
//             color="red"
//             triggered={sensor.triggered}
//           />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <PointLight
//               position={[15, 5, 0]}
//               intensity={1}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={[15, 5, 0]} fontSize={1} color="red">
//               ALERT: Elephant near the village!
//             </Text>
//           </>
//         )}
//         {alert && (
//           <Text position={[0, 5, 0]} fontSize={1} color="red">
//             ALERT: Elephant detected near the sensors!
//           </Text>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment, Sparkles } from "@react-three/drei";
// import { PointLight } from "three"; // Correct import for PointLight
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3"; // Ensure this file is in the src folder

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb"); // Ensure this file is in the public folder
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, color, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : color} />
//     </mesh>
//   );
// }

// // Ground component with terrain
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village huts
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// // Border near the village
// function Border() {
//   return (
//     <mesh position={[12, 0, 0]}>
//       <boxGeometry args={[2, 0.5, 10]} />
//       <meshStandardMaterial color="gray" />
//     </mesh>
//   );
// }

// // Main App component
// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [alert, setAlert] = useState(false);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [10, 0, 0], triggered: false }, // Second-last sensor near the border
//   ]);

//   // Simulate elephant movement towards the village
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prevPosition) => {
//         const villagePosition = [15, 0, 0];
//         const direction = [
//           villagePosition[0] - prevPosition[0],
//           villagePosition[1] - prevPosition[1],
//           villagePosition[2] - prevPosition[2],
//         ];
//         const speed = 0.1; // Adjust speed here
//         const newPosition = [
//           prevPosition[0] + direction[0] * speed,
//           prevPosition[1] + direction[1] * speed,
//           prevPosition[2] + direction[2] * speed,
//         ];
//         return newPosition;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Check if elephant is detected by any sensor
//   useEffect(() => {
//     const updatedSensors = sensors.map((sensor) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       return { ...sensor, triggered: distance < 5 }; // Detection range
//     });

//     setSensors(updatedSensors);

//     // Check if elephant is near the second-last sensor
//     const secondLastSensor = sensors[sensors.length - 2]; // Second-last sensor
//     const distanceToSecondLastSensor = Math.sqrt(
//       Math.pow(elephantPosition[0] - secondLastSensor.position[0], 2) +
//       Math.pow(elephantPosition[2] - secondLastSensor.position[2], 2)
//     );

//     if (distanceToSecondLastSensor < 5) { // Trigger flashlight and bee sound
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }

//     setAlert(updatedSensors.some((sensor) => sensor.triggered));
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor
//             key={index}
//             position={sensor.position}
//             color="red"
//             triggered={sensor.triggered}
//           />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         <Border />
//         {flashlightActive && (
//           <>
//             <PointLight
//               position={[12, 5, 0]} // Flashlight on the border
//               intensity={1}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={[12, 5, 0]} fontSize={1} color="red">
//               ALERT: Elephant near the border!
//             </Text>
//           </>
//         )}
//         {alert && (
//           <Text position={[0, 5, 0]} fontSize={1} color="red">
//             ALERT: Elephant detected near the sensors!
//           </Text>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import { PointLight } from "three";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//     </mesh>
//   );
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false },
//     { position: [-3, 0, -2], triggered: false }
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         if (flashlightActive) {
//           return [prev[0] - 0.5, prev[1], prev[2] - 0.5]; // Move back to forest
//         }
//         return [prev[0] + (Math.random() - 0.5), prev[1], prev[2] + (Math.random() - 0.5)];
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [flashlightActive]);

//   useEffect(() => {
//     const updatedSensors = sensors.map((sensor) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       return { ...sensor, triggered: distance < 4 };
//     });

//     setSensors(updatedSensors);

//     const isNearSensor = updatedSensors.some((sensor) => sensor.triggered);

//     if (isNearSensor) {
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <pointLight
//               position={elephantPosition}
//               intensity={1.5}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={elephantPosition} fontSize={1} color="red">
//               ALERT: Elephant detected!
//             </Text>
//           </>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }


//------------------------------------------------------------------------------------------------------------------last

// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//     </mesh>
//   );
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false },
//     { position: [-3, 0, -2], triggered: false },
//     { position: [6, 0, -4], triggered: false }, // New zigzag sensor
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         if (flashlightActive) {
//           return [-10, 0, 0]; // Move back to forest when detected
//         }
//         return [prev[0] + (Math.random() - 0.5), prev[1], prev[2] + (Math.random() - 0.5)];
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [flashlightActive]);

//   useEffect(() => {
//     const updatedSensors = sensors.map((sensor) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       return { ...sensor, triggered: distance < 4 };
//     });

//     setSensors(updatedSensors);

//     const isNearSensor = updatedSensors.some((sensor) => sensor.triggered);

//     if (isNearSensor) {
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <pointLight
//               position={elephantPosition}
//               intensity={1.5}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={[elephantPosition[0], elephantPosition[1] + 2, elephantPosition[2]]} fontSize={1} color="red">
//               ALERT: Elephant detected!
//             </Text>
//           </>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} />;
// }

// // Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//     </mesh>
//   );
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false },
//     { position: [-3, 0, -2], triggered: false },
//     { position: [6, 0, -4], triggered: false }, // New sensor
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         if (flashlightActive) {
//           return [-10, 0, 0]; // Move back to forest
//         }
//         return [prev[0] + 0.5, prev[1], prev[2]]; // Move in a straight line
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [flashlightActive]);

//   useEffect(() => {
//     let detected = false;
//     let updatedSensors = sensors.map((sensor, index) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       if (distance < 4) {
//         detected = true;
//       }
//       return { ...sensor, triggered: distance < 4 };
//     });

//     // Triangulation logic: Activate nearest 2 sensors when elephant is near one sensor
//     if (detected) {
//       updatedSensors = updatedSensors.map((sensor, index) => {
//         if (sensor.triggered) {
//           return {
//             ...sensor,
//             triggered: true,
//           };
//         }
//         const nearestSensors = updatedSensors
//           .filter((s) => s !== sensor)
//           .sort(
//             (a, b) =>
//               Math.sqrt(
//                 Math.pow(elephantPosition[0] - a.position[0], 2) +
//                 Math.pow(elephantPosition[2] - a.position[2], 2)
//               ) -
//               Math.sqrt(
//                 Math.pow(elephantPosition[0] - b.position[0], 2) +
//                 Math.pow(elephantPosition[2] - b.position[2], 2)
//               )
//           );
//         return nearestSensors.slice(0, 2).includes(sensor)
//           ? { ...sensor, triggered: true }
//           : sensor;
//       });
//     }

//     setSensors(updatedSensors);

//     if (detected) {
//       setFlashlightActive(true);
//       playBeeSound();
//     } else {
//       setFlashlightActive(false);
//       stop();
//     }
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <pointLight
//               position={elephantPosition}
//               intensity={1.5}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={[elephantPosition[0], 5, elephantPosition[2]]} fontSize={1} color="red">
//               ALERT: Elephant detected!
//             </Text>
//           </>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

///---------------------MAIN CODE------------------------/////

// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale, rotation }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
// }

// // Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//     </mesh>
//   );
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[3, 0, 2]}>
//         <boxGeometry args={[2, 2, 2]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [elephantRotation, setElephantRotation] = useState([0, 0, 0]);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false }, // 4th sensor (near the village)
//     { position: [-3, 0, -2], triggered: false },
//     { position: [6, 0, -4], triggered: false },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         if (flashlightActive) {
//           return [-10, 0, 0]; // Move back to forest
//         }
//         return prev[0] < 14 ? [prev[0] + 0.5, prev[1], prev[2]] : prev; // Move towards village
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [flashlightActive]);

//   useEffect(() => {
//     let detected = false;
//     let beeTriggered = false;
//     let updatedSensors = sensors.map((sensor, index) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );
//       if (distance < 4) {
//         detected = true;
//         if (index === 3) {
//           beeTriggered = true;
//         }
//       }
//       return { ...sensor, triggered: distance < 4 };
//     });

//     setSensors(updatedSensors);

//     if (beeTriggered) {
//       playBeeSound();
//       setTimeout(() => {
//         setElephantRotation([0, Math.PI, 0]); // Rotate elephant
//         let retreatInterval = setInterval(() => {
//           setElephantPosition((prev) => {
//             if (prev[0] > -10) {
//               return [prev[0] - 1, prev[1], prev[2]]; // Move back faster
//             } else {
//               clearInterval(retreatInterval);
//               setElephantRotation([0, 0, 0]); // Reset rotation
//               return prev;
//             }
//           });
//         }, 500);
//       }, 1000);
//     }
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} rotation={elephantRotation} />
//         <Village />
//         {flashlightActive && (
//           <>
//             <pointLight
//               position={elephantPosition}
//               intensity={1.5}
//               color="yellow"
//               distance={10}
//               decay={2}
//             />
//             <Text position={[elephantPosition[0], 5, elephantPosition[2]]} fontSize={1} color="red">
//               ALERT: Elephant detected!
//             </Text>
//           </>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

//--------------------------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale, rotation }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
// }

// // Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <group position={position}>
//       {/* Cylindrical base */}
//       <mesh>
//         <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
//         <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//       </mesh>
//       {/* Dome-like top */}
//       <mesh position={[0, 0.5, 0]}>
//         <sphereGeometry args={[0.5, 16, 16, 0, Math.PI]} />
//         <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//       </mesh>
//     </group>
//   );
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       {Array.from({ length: 2 }).map((_, row) =>
//         Array.from({ length: 3 }).map((_, col) => (
//           <group key={`${row}-${col}`} position={[(col - 1) * 3, 0, (row - 0.5) * 3]}>
//             <mesh>
//               <boxGeometry args={[2, 2, 2]} />
//               <meshStandardMaterial color="brown" />
//             </mesh>
//             <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
//               <coneGeometry args={[1.8, 1.5, 4]} />
//               <meshStandardMaterial color="red" />
//             </mesh>
//           </group>
//         ))
//       )}
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [elephantRotation, setElephantRotation] = useState([0, 0, 0]);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [notification, setNotification] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false },
//     { position: [-3, 0, -2], triggered: false },
//     { position: [6, 0, -4], triggered: false },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         if (flashlightActive) {
//           return [-10, 0, 0];
//         }
//         return prev[0] < 14 ? [prev[0] + 0.5, prev[1], prev[2]] : prev;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [flashlightActive]);

//   useEffect(() => {
//     let detected = false;
//     let beeTriggered = false;
//     let firstSensorTriggered = false;

//     let updatedSensors = sensors.map((sensor, index) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );

//       if (distance < 4) {
//         detected = true;
//         if (index === 3) {
//           beeTriggered = true;
//         }
//         if (index === 0) {
//           firstSensorTriggered = true;
//         }
//       }

//       return { ...sensor, triggered: distance < 4 };
//     });

//     setSensors(updatedSensors);

//     if (firstSensorTriggered) {
//       setNotification("The elephant is detected");
//       setTimeout(() => {
//         setShowPopup(true);
//         setNotification("Location is sent to the forest department");
//         setTimeout(() => setShowPopup(false), 3000);
//       }, 2000);
//     }

//     if (beeTriggered) {
//       playBeeSound();
//       setTimeout(() => {
//         setElephantRotation([0, Math.PI, 0]);
//         let retreatInterval = setInterval(() => {
//           setElephantPosition((prev) => {
//             if (prev[0] > -10) {
//               return [prev[0] - 1, prev[1], prev[2]];
//             } else {
//               clearInterval(retreatInterval);
//               setElephantRotation([0, 0, 0]);
//               return prev;
//             }
//           });
//         }, 500);
//       }, 1000);
//     }
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
//       {notification && (
//         <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", backgroundColor: "rgba(0,0,0,0.7)", color: "white", padding: "10px 20px", borderRadius: "10px", fontSize: "18px" }}>{notification}</div>
//       )}
//       {showPopup && (
//         <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "red", color: "white", padding: "20px", borderRadius: "10px", fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>🚨 Location is sent to the forest department 🚨</div>
//       )}
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} rotation={elephantRotation} />
//         <Village />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

//------------------------------updated model---------------

// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale, rotation }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
// }

// // Infrasound Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <group position={position}>
//       {/* Cylindrical Base */}
//       <mesh>
//         <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
//         <meshStandardMaterial color={triggered ? "yellow" : "gray"} />
//       </mesh>
//       {/* Dish-like Top */}
//       <mesh position={[0, 0.6, 0]}>
//         <coneGeometry args={[0.6, 0.4, 32]} />
//         <meshStandardMaterial color={triggered ? "yellow" : "silver"} />
//       </mesh>
//     </group>
//   );
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component with 3-row, 2-column layout
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       {[0, 1, 2].map((row) =>
//         [-1, 1].map((col) => (
//           <group key={`${row}-${col}`} position={[col * 3, 0, row * -3]}>
//             <mesh>
//               <boxGeometry args={[2, 2, 2]} />
//               <meshStandardMaterial color="brown" />
//             </mesh>
//             <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
//               <coneGeometry args={[1.8, 1.5, 4]} />
//               <meshStandardMaterial color="red" />
//             </mesh>
//           </group>
//         ))
//       )}
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [elephantRotation, setElephantRotation] = useState([0, 0, 0]);
//   const [playBeeSound] = useSound(beeSound, { volume: 0.5 });
//   const [notification, setNotification] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false },
//     { position: [-3, 0, -2], triggered: false },
//     { position: [6, 0, -4], triggered: false },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => (prev[0] < 14 ? [prev[0] + 0.5, prev[1], prev[2]] : prev));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     let detected = false;
//     let beeTriggered = false;

//     let updatedSensors = sensors.map((sensor, index) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );

//       if (distance < 4) {
//         detected = true;
//         if (index === 3) beeTriggered = true;
//       }

//       return { ...sensor, triggered: distance < 4 };
//     });

//     setSensors(updatedSensors);

//     if (detected) {
//       setNotification("The elephant is detected");
//       setTimeout(() => {
//         setShowPopup(true);
//         setNotification("Location is sent to the forest department");
//         setTimeout(() => setShowPopup(false), 3000);
//       }, 2000);
//     }

//     if (beeTriggered) {
//       playBeeSound();
//       setTimeout(() => {
//         setElephantRotation([0, Math.PI, 0]);
//         let retreatInterval = setInterval(() => {
//           setElephantPosition((prev) => {
//             if (prev[0] > -10) {
//               return [prev[0] - 1, prev[1], prev[2]];
//             } else {
//               clearInterval(retreatInterval);
//               setElephantRotation([0, 0, 0]);
//               return prev;
//             }
//           });
//         }, 500);
//       }, 1000);
//     }
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
//       {notification && (
//         <div style={{
//           position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)",
//           backgroundColor: "rgba(0,0,0,0.7)", color: "white", padding: "10px 20px",
//           borderRadius: "10px", fontSize: "18px"
//         }}>
//           {notification}
//         </div>
//       )}
//       {showPopup && (
//         <div style={{
//           position: "absolute", top: "40%", left: "50%", transform: "translate(-50%, -50%)",
//           backgroundColor: "red", color: "white", padding: "20px", borderRadius: "10px",
//           fontSize: "20px", fontWeight: "bold", textAlign: "center"
//         }}>
//           🚨 Location is sent to the forest department 🚨
//         </div>
//       )}
//       <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} rotation={elephantRotation} />
//         <Village />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, scale, rotation }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
// }

// // Realistic Infrasound Sensor
// function Sensor({ position, triggered }) {
//   return (
//     <group position={position}>
//       <mesh position={[0, 0.3, 0]}>
//         <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
//         <meshStandardMaterial color={triggered ? "yellow" : "darkgray"} />
//       </mesh>
//       <mesh position={[0, 0.8, 0]}>
//         <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
//         <meshStandardMaterial color="black" />
//       </mesh>
//       <mesh position={[0, 1.1, 0]}>
//         <sphereGeometry args={[0.2, 16, 16]} />
//         <meshStandardMaterial color={triggered ? "yellow" : "black"} />
//       </mesh>
//     </group>
//   );
// }

// // Ground
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[40, 20, 32, 32]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village moved to the last-center
// function Village() {
//   return (
//     <group position={[15, 0, 0]}> {/* Moved slightly left */}
//       {[-3, 0, 3].map((row, rowIndex) => ( // Extra spacing between rows
//         [-2, 2].map((col, colIndex) => (
//           <group key={`${rowIndex}-${colIndex}`} position={[col, 0, row]}>
//             {/* House base */}
//             <mesh>
//               <boxGeometry args={[2, 2, 2]} />
//               <meshStandardMaterial color="brown" />
//             </mesh>
//             {/* Roof */}
//             <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
//               <coneGeometry args={[1.8, 1.5, 4]} />
//               <meshStandardMaterial color="red" />
//             </mesh>
//           </group>
//         ))
//       ))}
//     </group>
//   );
// }


// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
//   const [elephantRotation, setElephantRotation] = useState([0, 0, 0]);
//   const [flashlightActive, setFlashlightActive] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });
//   const [notification, setNotification] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [sensors, setSensors] = useState([
//     { position: [-5, 0, 5], triggered: false },
//     { position: [5, 0, 5], triggered: false },
//     { position: [0, 0, -5], triggered: false },
//     { position: [7, 0, 3], triggered: false },
//     { position: [-3, 0, -2], triggered: false },
//     { position: [6, 0, -4], triggered: false },
//   ]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         if (flashlightActive) return [-10, 0, 0];
//         return prev[0] < 14 ? [prev[0] + 0.5, prev[1], prev[2]] : prev;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [flashlightActive]);

//   useEffect(() => {
//     let detected = false;
//     let beeTriggered = false;
//     let firstSensorTriggered = false;

//     let updatedSensors = sensors.map((sensor, index) => {
//       const distance = Math.sqrt(
//         Math.pow(elephantPosition[0] - sensor.position[0], 2) +
//         Math.pow(elephantPosition[2] - sensor.position[2], 2)
//       );

//       if (distance < 4) {
//         detected = true;
//         if (index === 3) beeTriggered = true;
//         if (index === 0) firstSensorTriggered = true;
//       }

//       return { ...sensor, triggered: distance < 4 };
//     });

//     setSensors(updatedSensors);

//     if (firstSensorTriggered) {
//       setNotification("The elephant is detected");
//       setTimeout(() => {
//         setShowPopup(true);
//         setNotification("Location is sent to the forest department");
//         setTimeout(() => setShowPopup(false), 3000);
//       }, 2000);
//     }

//     if (beeTriggered) {
//       playBeeSound();
//       setTimeout(() => {
//         setElephantRotation([0, Math.PI, 0]);
//         let retreatInterval = setInterval(() => {
//           setElephantPosition((prev) => {
//             if (prev[0] > -10) return [prev[0] - 1, prev[1], prev[2]];
//             else {
//               clearInterval(retreatInterval);
//               setElephantRotation([0, 0, 0]);
//               return prev;
//             }
//           });
//         }, 500);
//       }, 1000);
//     }
//   }, [elephantPosition]);

//   return (
//     <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Sky sunPosition={[100, 20, 100]} />
//       <Environment preset="forest" />
//       <Ground />
//       {sensors.map((sensor, index) => (
//         <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//       ))}
//       <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} rotation={elephantRotation} />
//       <Village />
//       <OrbitControls />
//     </Canvas>
//   );
// }

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
import useSound from "use-sound";
import beeSound from "./beeSound.mp3";

// Load the elephant model
function Elephant({ position, scale, rotation }) {
  const { scene } = useGLTF("/elephant.glb");
  return <primitive object={scene} position={position} scale={scale} rotation={rotation} />;
}

// Realistic Infrasound Sensor
function Sensor({ position, triggered }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 32]} />
        <meshStandardMaterial color={triggered ? "yellow" : "darkgray"} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color={triggered ? "yellow" : "black"} />
      </mesh>
    </group>
  );
}

// Tree Component
function Tree({ position }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 2, 16]} />
        <meshStandardMaterial color="saddlebrown" />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  );
}

// Ground
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[40, 20, 32, 32]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

// Village moved slightly left-center
function Village() {
  return (
    <group position={[13, 0, 0]}>
      {[-3, 0, 3].map((row, rowIndex) =>
        [-2, 2].map((col, colIndex) => (
          <group key={`${rowIndex}-${colIndex}`} position={[col + 1, 0, row]}>
            {/* House base */}
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="brown" />
            </mesh>
            {/* Roof */}
            <mesh position={[0, 1.5, 0]} rotation={[0, Math.PI / 4, 0]}>
              <coneGeometry args={[1.8, 1.5, 4]} />
              <meshStandardMaterial color="red" />
            </mesh>
          </group>
        ))
      )}
    </group>
  );
}

export default function App() {
  const [elephantPosition, setElephantPosition] = useState([-10, 0, 0]);
  const [elephantRotation, setElephantRotation] = useState([0, 0, 0]);
  const [flashlightActive, setFlashlightActive] = useState(false);
  const [playBeeSound] = useSound(beeSound, { volume: 0.5 });
  const [showPopup, setShowPopup] = useState(false);

  const [sensors, setSensors] = useState([
    { position: [-5, 0, 5], triggered: false },
    { position: [5, 0, 5], triggered: false },
    { position: [0, 0, -5], triggered: false },
    { position: [7, 0, 3], triggered: false },
    { position: [-3, 0, -2], triggered: false },
    { position: [6, 0, -4], triggered: false },
  ]);

  // Trees placed only on the left side (negative X values)
  const trees = [
    { position: [-12, 0, -5] },
    { position: [-11, 0, 0] },
    { position: [-10, 0, 5] },
    { position: [-9, 0, -3] },
    { position: [-8, 0, 3] },
    { position: [-7, 0, -6] },
    { position: [-6, 0, 2] },
    { position: [-5, 0, -4] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setElephantPosition((prev) => {
        if (flashlightActive) return [-10, 0, 0];
        return prev[0] < 14 ? [prev[0] + 0.5, prev[1], prev[2]] : prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [flashlightActive]);

  useEffect(() => {
    let detected = false;
    let beeTriggered = false;

    let updatedSensors = sensors.map((sensor) => {
      const distance = Math.sqrt(
        Math.pow(elephantPosition[0] - sensor.position[0], 2) +
        Math.pow(elephantPosition[2] - sensor.position[2], 2)
      );

      if (distance < 4) {
        detected = true;
        if (sensor.position[0] === 7) beeTriggered = true;
      }

      return { ...sensor, triggered: distance < 4 };
    });

    setSensors(updatedSensors);

    if (detected) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }

    if (beeTriggered) {
      playBeeSound();
      setTimeout(() => {
        setElephantRotation([0, Math.PI, 0]);
        let retreatInterval = setInterval(() => {
          setElephantPosition((prev) => {
            if (prev[0] > -10) return [prev[0] - 1, prev[1], prev[2]];
            else {
              clearInterval(retreatInterval);
              setElephantRotation([0, 0, 0]);
              return prev;
            }
          });
        }, 100);
      }, 100);
    }
  }, [elephantPosition]);

  return (
    <>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "10%", // Position the popup 10% from the bottom
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(255, 0, 0, 0.9)",
            padding: "20px",
            borderRadius: "5px",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        >
          ⚠️ Elephant Detected! Location sent to the forest department.
        </div>
      )}
      <Canvas camera={{ position: [0, 10, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sky sunPosition={[100, 20, 100]} />
        <Environment preset="forest" />
        <Ground />
        {trees.map((tree, index) => (
          <Tree key={index} position={tree.position} />
        ))}
        {sensors.map((sensor, index) => (
          <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
        ))}
        <Elephant position={elephantPosition} scale={[0.5, 0.5, 0.5]} rotation={elephantRotation} />
        <Village />
        <OrbitControls />
      </Canvas>
    </>
  );
}






// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Text, useGLTF, Sky, Environment } from "@react-three/drei";
// import useSound from "use-sound";
// import beeSound from "./beeSound.mp3";

// // Load the elephant model
// function Elephant({ position, rotation }) {
//   const { scene } = useGLTF("/elephant.glb");
//   return <primitive object={scene} position={position} rotation={rotation} scale={[0.5, 0.5, 0.5]} />;
// }

// // Sensor component
// function Sensor({ position, triggered }) {
//   return (
//     <mesh position={position}>
//       <sphereGeometry args={[0.5, 16, 16]} />
//       <meshStandardMaterial color={triggered ? "yellow" : "red"} />
//     </mesh>
//   );
// }

// // Flashlight component
// function Flashlight({ position, active }) {
//   return active ? (
//     <spotLight position={position} intensity={3} angle={0.5} penumbra={0.5} color="yellow" />
//   ) : null;
// }

// // Ground component
// function Ground() {
//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
//       <planeGeometry args={[50, 25]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// }

// // Village component
// function Village() {
//   return (
//     <group position={[15, 0, 0]}>
//       <mesh position={[0, 0, 0]}>
//         <boxGeometry args={[3, 3, 3]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//       <mesh position={[4, 0, 2]}>
//         <boxGeometry args={[3, 3, 3]} />
//         <meshStandardMaterial color="brown" />
//       </mesh>
//     </group>
//   );
// }

// export default function App() {
//   const [elephantPosition, setElephantPosition] = useState([-15, 0, 0]); // Starts in forest
//   const [elephantRotation, setElephantRotation] = useState([0, 0, 0]); // No initial rotation
//   const [sensors, setSensors] = useState([
//     { position: [-10, 0, 3], triggered: false },
//     { position: [-5, 0, 5], triggered: false },
//     { position: [0, 0, -3], triggered: false },
//     { position: [5, 0, 3], triggered: false },
//     { position: [10, 0, 2], triggered: false } // Near the village
//   ]);
//   const [flashlights, setFlashlights] = useState(false);
//   const [playBeeSound, { stop }] = useSound(beeSound, { volume: 0.5 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setElephantPosition((prev) => {
//         const newPosition = [prev[0] + 1, prev[1], prev[2]]; // Move straight

//         // When elephant reaches last sensors, trigger bee sound
//         if (newPosition[0] >= 10) {
//           setFlashlights(true);
//           playBeeSound();

//           // After 3 seconds, elephant turns back
//           setTimeout(() => {
//             setElephantRotation([0, Math.PI, 0]); // Rotate 180 degrees
//             setElephantPosition([-15, 0, 0]); // Move back to the forest
//             setFlashlights(false);
//             stop();
//           }, 3000);
//         }

//         return newPosition;
//       });
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Activate all sensors as the elephant moves forward
//     const updatedSensors = sensors.map((sensor) => {
//       return { ...sensor, triggered: elephantPosition[0] >= sensor.position[0] };
//     });

//     setSensors(updatedSensors);
//   }, [elephantPosition]);

//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <Sky sunPosition={[100, 20, 100]} />
//         <Environment preset="forest" />
//         <Ground />
//         <Village />
//         {sensors.map((sensor, index) => (
//           <Sensor key={index} position={sensor.position} triggered={sensor.triggered} />
//         ))}
//         <Elephant position={elephantPosition} rotation={elephantRotation} />
//         {/* Three flashlights in front of the village */}
//         <Flashlight position={[13, 5, -3]} active={flashlights} />
//         <Flashlight position={[15, 5, 0]} active={flashlights} />
//         <Flashlight position={[17, 5, 3]} active={flashlights} />
//         {flashlights && (
//           <Text position={[10, 5, 0]} fontSize={1} color="red">
//             ALERT: Elephant detected!
//           </Text>
//         )}
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

