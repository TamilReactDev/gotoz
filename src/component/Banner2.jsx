import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

function Banner2() {
	const modelViewerRef = useRef(null);
	const [value, setValue] = useState('3dTiles.png');

	useEffect(() => {
		const modelViewer = modelViewerRef.current;

		const handleLoad = () => {
			const material = modelViewer.model.materials[0];
			console.log(material);

			const createAndApplyTexture = async (channel, event) => {
				if (!event) {
					material[channel].setTexture(null);
				} else if (event) {
					const texture = await modelViewer.createTexture(event);
					material[channel]['baseColorTexture'].setTexture(null);
					material[channel]['baseColorTexture'].setTexture(texture);

				}
			}

			if (value) {
				createAndApplyTexture('pbrMetallicRoughness', value);
			}
		};

		modelViewer.addEventListener('load', handleLoad);

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
			<model-viewer ref={modelViewerRef} className='relative' style={{ width: '100%', height: '100%' }} src="plain1Tile.glb" ar ar-modes="scene-viewer webxr " ar-placement='floor wall' camera-controls tone-mapping="neutral" poster="poster.webp" auto-rotate
				exposure="1"
			>
				<select name="" id="blend-mode">
					<option value="default">Default</option>
					<option value="skip">Skip</option>
					<option value="add">Add</option>
				</select>
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
				<div class="progress-bar" slot="progress-bar">
					<div class="update-bar"></div>
				</div>
			</model-viewer>

		</>





	);
}

export default Banner2;
