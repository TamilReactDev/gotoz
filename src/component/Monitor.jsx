import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Monitor(props) {
  const { nodes, materials } = useGLTF('/ball.gltf');
  
  return (
    <group {...props} scale={5} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['10131_BaseballCap_v02'].geometry}
        material={nodes['10131_BaseballCap_v02'].material}
      />
    </group>
  )
}

useGLTF.preload('/ball.gltf')