/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/floors/Island.glb -o src/components/models/floors/Island.tsx -s -k -r public/ 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Ocean: THREE.Mesh
    Plane111: THREE.Mesh
    Plane111_1: THREE.Mesh
    Plane111_2: THREE.Mesh
    Plane111_3: THREE.Mesh
  }
  materials: {
    Water: THREE.MeshPhysicalMaterial
    Land: THREE.MeshStandardMaterial
    Grass: THREE.MeshStandardMaterial
    Sand: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Island(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/floors/Island.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh name="Ocean" receiveShadow geometry={nodes.Ocean.geometry} material={materials.Water} />
      <mesh name="Plane111" receiveShadow geometry={nodes.Plane111.geometry} material={materials.Land} />
      <mesh name="Plane111_1" receiveShadow geometry={nodes.Plane111_1.geometry} material={materials.Grass} />
      <mesh name="Plane111_2" receiveShadow geometry={nodes.Plane111_2.geometry} material={materials.Sand} />
      <mesh name="Plane111_3" receiveShadow geometry={nodes.Plane111_3.geometry} material={materials.Water} />
    </group>
  )
}

useGLTF.preload('/models/floors/Island.glb')
