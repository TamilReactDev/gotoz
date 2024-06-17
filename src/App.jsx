
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './component/Banner';
import { Header } from './component/Header';
import HeroSection from './component/HeroSection';
import styles from "./style";


import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { useGLTF,PerspectiveCamera, AccumulativeShadows, RandomizedLight,OrbitControls,Stage, Environment, CameraControls } from '@react-three/drei'
import { Monitor } from './component/Monitor';
import AcquisitionCard from './component/AcquisitionCard';
import Feature from './component/Feature';
import Banner2 from './component/Banner2';
import '@google/model-viewer';


function App() {


	const ref = useRef();

	return (
		<div className='w-full h-screen bg-yellow mx-auto'>
			<div>
				<Header />

				
			</div>
			<section>
			<Banner />
			</section>
			<section className='mt-16'>
				<div className={`${styles.boxWidth} p-2` }>
					<Feature />
				</div>
			</section>
			
			<Banner2 />

		</div>
	)
}

function Shoe(props) {
	const { nodes, materials } = useGLTF('/shoe.gltf')
	return (
	  <group {...props} dispose={null}>
		<mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
		<mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
	  </group>
	)
  }
  

export default App
