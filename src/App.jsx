
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './component/Banner';
import { Header } from './component/Header';
import HeroSection from './component/HeroSection';
import styles from "./style";
import React, { Suspense, useRef, useState } from 'react'

import AcquisitionCard from './component/AcquisitionCard';
import Feature from './component/Feature';
import Banner2 from './component/Banner2';
import '@google/model-viewer';
import Third from './component/Third';



function App() {


	const ref = useRef();
	const [value, setValue] = useState('3dTiles.png');

	return (
		<div className='w-full h-screen bg-yellow mx-auto'>
			<div>
				<Header />


			</div>
			<section>
				{/* <Banner /> */}
			</section>
			<section className='mt-16'>
				<div className={`${styles.boxWidth} p-2`}>
					<Feature />
				</div>
			</section>
			 <div className='w-full h-full grid md:grid-cols-3 grid-cols-1 p-2 border-gray-200'>
				<div className='w-full col-span-2 border-2 border-slate-200 h-[600px]'>
					<Suspense fallback={null}>
						<Banner2  />
					</Suspense>
					
				</div> 
				{/* <div className='flex 2 flex-row gap-2 md:flex-col items-center justify-center'>
					<div
						className="block h-32 w-32 p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100"
						onClick={() => setValue('3dTiles.png')}
					>
						<img src="3dTiles.png" alt="tiles" className="h-full w-full object-cover" />
					</div>
					<div
						className="block h-32 w-32 p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100"
						onClick={() => setValue('3dTiles1.jpg')}
					>
						<img src="3dTiles1.jpg" alt="tiles" className="h-full w-full object-cover" />
					</div>
					<div
						className="block h-32 w-32 p-6 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100"
						onClick={() => setValue('3dTiles2.jpg')}
					>
						<img src="3dTiles2.jpg" alt="tiles" className="h-full w-full object-cover" />
					</div>
				</div> */}
				
			 </div> 

					{/* <Third /> */}

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
