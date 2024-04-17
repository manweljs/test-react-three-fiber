/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/scenes/About.glb -o src/components/models/scenes/About.tsx -k -s -r public/ 
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import Image from 'next/image'
import { ICON_SIZE, PRIMARY_COLOR, SECTION, sectionData } from '@/consts'
import { useUserContext } from '@/context/UserContext'
import style from '@/styles/style.module.sass'
import { Tooltip } from 'antd'
import { PositionType } from '@/types'
import { materials } from '@/consts/materials'

type GLTFResult = GLTF & {
  nodes: {
    Plane003: THREE.Mesh
    Plane003_1: THREE.Mesh
    statue001: THREE.Mesh
    Icosphere004: THREE.Mesh
    Icosphere004_1: THREE.Mesh
    Plane006: THREE.Mesh
    Plane006_1: THREE.Mesh
    Plane008: THREE.Mesh
    Plane008_1: THREE.Mesh
    Plane009: THREE.Mesh
    Plane009_1: THREE.Mesh
    Plane019: THREE.Mesh
    Plane019_1: THREE.Mesh
    Plane021: THREE.Mesh
    Plane021_1: THREE.Mesh
    Plane025: THREE.Mesh
    Plane025_1: THREE.Mesh
  }
  materials: {
    Base: THREE.MeshStandardMaterial
    Glass: THREE.MeshPhysicalMaterial
    ['Soft Green']: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    Tree: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function About(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/models/scenes/About.glb') as GLTFResult

  const { isNight } = useUserContext()

  const glass = isNight ? materials.GlassNight : materials.Glass
  return (
    <group {...props} dispose={null}>

    </group>
  )
}

useGLTF.preload('/models/scenes/About.glb')
