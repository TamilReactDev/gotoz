import React, { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

function Banner2({value}) {
    const modelViewerRef = useRef(null);
    // const [value,setValue] = useState('');
    
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
            console.log(value)
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
          <model-viewer ref={modelViewerRef} style={{ width: '100%', height: '100%' }} src="plain1Tile.glb" ar ar-modes="scene-viewer webxr " ar-placement='floor' camera-controls tone-mapping="neutral" poster="poster.webp"  auto-rotate
        exposure="1"
        
        >
            <div class="progress-bar" slot="progress-bar">
                <div class="update-bar"></div>
            </div>
            <button slot="ar-button" className='bg-red-400' id="ar-button">
                View in your space
            </button>
           
            <div id="ar-prompt">
                <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
            </div>
        </model-viewer>
         {/* <select name=""  onChange={(e) => setValue(e.target.value)}  id="">
         <option value="kids.png">tile1</option>
         <option value="ar.png">Tile2</option>
         <option value="3dTiles.png">Tile3</option>
     </select> */}
        </>
        
        



    );
}

export default Banner2;
