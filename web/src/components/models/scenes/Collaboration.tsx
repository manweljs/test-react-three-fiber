/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/scenes/Collaboration.glb -o src/components/models/scenes/Collaboration.tsx -k -s -r public/ 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane081: THREE.Mesh
    Plane081_1: THREE.Mesh
    Plane081_2: THREE.Mesh
    Plane081_3: THREE.Mesh
    Plane071: THREE.Mesh
    Plane071_1: THREE.Mesh
    Plane071_2: THREE.Mesh
  }
  materials: {
    Base: THREE.MeshStandardMaterial
    Primary: THREE.MeshStandardMaterial
    Coles: THREE.MeshStandardMaterial
    Glass: THREE.MeshPhysicalMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Collaboration(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/scenes/Collaboration.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>

    </group>
  )
}

useGLTF.preload('/models/scenes/Collaboration.glb')
