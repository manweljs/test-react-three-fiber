/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/buildings/Office.glb -o src/components/models/buildings/Office.tsx -s -k -r public/ 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useUserContext } from '@/context/UserContext'
import { materials } from '@/consts/materials'

type GLTFResult = GLTF & {
  nodes: {
    Plane102: THREE.Mesh
    Plane102_1: THREE.Mesh
    Plane103: THREE.Mesh
    Plane103_1: THREE.Mesh
  }
  materials: {
    WindowNight: THREE.MeshStandardMaterial
    Base: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Office(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/models/buildings/Office.glb') as GLTFResult

  const { isNight } = useUserContext()

  return (
    <group {...props} dispose={null}>
      <group name="Office002" position={[48.67, -0.166, 77.714]}>
        <mesh name="Plane102" castShadow geometry={nodes.Plane102.geometry} material={materials.Base} >
          {isNight ?
            <meshBasicMaterial color={[1, 1, 1]} toneMapped={false} />
            : null}
        </mesh>
        <mesh name="Plane102_1" castShadow geometry={nodes.Plane102_1.geometry} material={materials.Base} />
      </group>

      <group name="Office003" position={[56.996, -0.166, 75.252]}>
        <mesh name="Plane103" castShadow geometry={nodes.Plane103.geometry} material={isNight ? materials.Lamp : materials.Glass} />

        <mesh name="Plane103_1" castShadow geometry={nodes.Plane103_1.geometry} material={materials.Base} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/buildings/Office.glb')
