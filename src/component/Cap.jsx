import React from 'react'

const Cap = () => {
  return (
    <div className='w-full h-full'>
        <model-viewer style={{width:'100%',height:'100%'}} camera-controls touch-action="pan-y" skybox-image="citybeach.webp" alt="A 3D model of a   damaged helmet" src="eiffle tower.glb">
        </model-viewer>
    </div>
  )
}

export default Cap
