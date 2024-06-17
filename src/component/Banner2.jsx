import React from 'react';
import '@google/model-viewer';

function Banner2() {
  return (
    
    
        <model-viewer style={{ width: '100%', height: '100%' }}  src="shoe.gltf"  ar ar-modes="scene-viewer webxr " ar-placement='floor' camera-controls tone-mapping="neutral" poster="poster.webp" shadow-intensity="1"  auto-rotate
        >
    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" className='bg-red-400' id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
    </div>
</model-viewer>
    


  );
}

export default Banner2;
