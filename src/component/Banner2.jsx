import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

function Banner2() {
	const modelViewerRef = useRef(null);
	const selectMode = useRef(null);
	// const [value, setValue] = useState('3dTiles.png');

	useEffect(() => {
		const modelViewer = modelViewerRef.current;

		const handleLoad = (e) => {
			const material = modelViewer.model.materials[0];


			const createAndApplyTexture = async (channel, event) => {
				 if (event) {
					const texture = await modelViewer.createTexture(event);
					material[channel]['baseColorTexture'].setTexture(null);
					material[channel]['baseColorTexture'].setTexture(texture);

				}
			}

			if (e) {
				createAndApplyTexture('pbrMetallicRoughness', e?.target.value);
			}
		};

		modelViewer.addEventListener('load', handleLoad);
		selectMode.current.addEventListener('change' ,(e) => {
			handleLoad(e);
		})

		// Trigger handleLoad if model is already loaded
		if (modelViewer.model && modelViewer.model.materials.length > 0) {
			handleLoad('');
		}

		return () => {
			modelViewer.removeEventListener('load', handleLoad);
		};
	}, []);

	return (

		<>
			 <model-viewer className={{heigh:'200px',width:'200px'}} ref={modelViewerRef} id="blendViewer" ar-placement="floor" camera-controls touch-action="pan-y" ar src={'plain1Tile.glb'} alt="A 3D model of an astronaut"
				exposure="1"
			>
				<div className="controls" style={{ margin:'100px' }}>
					
					<select id="blend-mode" ref={selectMode}>
						<option value="3dTiles.png">Default</option>
						<option value="3dTiles1.jpg">Skip</option>
						
					</select>
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