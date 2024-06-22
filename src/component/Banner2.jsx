import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

function Banner2() {
	const modelViewerRef = useRef(null);
	const selectMode = useRef(null);
	 const [value, setValue] = useState('3dTiles.png');

	useEffect(() => {
		const modelViewer = modelViewerRef.current;

		const handleLoad = (() => {
			const material = modelViewer.model.materials[0];


			const createAndApplyTexture = async (channel, event) => {
				if (event) {
					const texture = await modelViewer.createTexture(event);
					material[channel]['baseColorTexture'].setTexture(null);
					material[channel]['baseColorTexture'].setTexture(texture);

				}
			}
			createAndApplyTexture('pbrMetallicRoughness', value);
			
		});

		modelViewer.addEventListener('load', handleLoad);
		// selectMode.current.addEventListener('change', (e) => {
			// handleLoad(value);
		// })
		// Trigger handleLoad if model is already loaded
		if (modelViewer.model && modelViewer.model.materials.length > 0) {
			handleLoad();
		}

		return () => {
			modelViewer.removeEventListener('load', handleLoad);
		};
	}, [value]);

	return (

		<>
			<model-viewer style={{ height: '100%', width: '100%',position:"relative" }} ref={modelViewerRef} id="blendViewer" ar-placement="floor wall" camera-controls touch-action="pan-y" ar src={'plain1Tile.glb'} alt="A 3D model of a Tiles"
				exposure="1"
			>
				<div  class="controls absolute bottom-5 left-1/2 transform -translate-x-1/2">
					<div className='flex gap-2'>
						<div onClick={() => setValue('3dTiles1.jpg')} className="h-10 w-10 p-2 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100" >
							<img src="3dTiles1.jpg" alt="tiles" className="h-5 w-5 object-cover" />
						</div>
						<div onClick={() => setValue('3dTiles2.jpg')} className="h-10 w-10 p-2 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100" >
							<img src="3dTiles2.jpg" alt="tiles" className="h-5 w-5 object-cover" />
						</div>
						<div onClick={() => setValue('3dTiles.png')} className="h-10 w-10 p-2 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100" >
							<img src="3dTiles.png" alt="tiles" className="h-5 w-5 object-cover" />
						</div>
					</div>
				</div>
				<div class="progress-bar" slot="progress-bar">
					<div class="update-bar"></div>
				</div>
			</model-viewer>

		</>





	);
}

export default Banner2;



{/* <div className='absolute right-0 flex md:flex-col flex-row'>
					<div
						className=" md:h-32 md:w-32 h-20 w-20 p-2 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100"
						onClick={() => setValue('3dTiles.png')}
					>
						<img src="3dTiles.png" alt="tiles" className="h-full w-full object-cover" />
					</div>
					<div
						className="md:h-32 md:w-32 p-2 bg-white border border-gray-200 shadow-xl rounded-lg hover:bg-blue-100"
						onClick={() => setValue('3dTiles1.jpg')}
					>
						<img src="3dTiles1.jpg" alt="tiles" className="h-full w-full object-cover" />
					</div>
				</div> */}