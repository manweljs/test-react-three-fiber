/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/husky/Husky.glb 
*/


import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { CapsuleCollider, ConeCollider, CuboidCollider, RigidBody, RigidBodyProps } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

const actionList = ["Gallop", "Idle", "Death", "Stand", "Walk"]

export function Husky(props: {
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}) {
  const huskyRef = useRef(null)
  const rigidBodyRef = useRef(null)

  const [actionIndex, setActionIndex] = useState<number>(0); // Initially set to "Walk"
  const { nodes, materials, animations } = useGLTF('./models/husky/Husky.glb')
  const { actions } = useAnimations(animations, huskyRef)

  useEffect(() => {
    actions[actionList[actionIndex]].play();
  }, []);
  const center = { x: 0, z: 0 }; // Pusat lingkaran
  const radius = 20; // Radius lingkaran, coba ubah ini untuk melihat perbedaan
  const rotationSpeed = .1; // Kecepatan rotasi dalam radian per detik

  useFrame((state) => {
    if (!rigidBodyRef.current) return;

    // Hitung sudut saat ini
    const angle = state.clock.getElapsedTime() * rotationSpeed;

    // Kecepatan tangensial berdasarkan radius dan kecepatan rotasi
    // v = omega * r, dimana omega adalah kecepatan sudut (radian per detik) dan r adalah radius
    const tangentialSpeed = rotationSpeed * radius; // Ini akan menyesuaikan kecepatan berdasarkan radius

    // Menghitung komponen kecepatan linier untuk menciptakan gerakan melingkar
    const velocityX = Math.cos(angle + Math.PI / 2) * tangentialSpeed;
    const velocityZ = Math.sin(angle + Math.PI / 2) * tangentialSpeed;

    // Terapkan kecepatan linier pada RigidBody
    rigidBodyRef.current.setLinvel({ x: velocityX, y: 0, z: velocityZ }, true);
  });


  return (
    <RigidBody
      ref={rigidBodyRef}
      position={[10, 6, 0]}
      enabledRotations={[false, false, false]}
      colliders={false} >
      <CapsuleCollider args={[0, 1.2]} />
      <group ref={huskyRef} {...props} receiveShadow castShadow position={[0, -1.2, 0]}>
        <group name="Root_Scene" receiveShadow castShadow>
          <group name="RootNode" receiveShadow castShadow>
            <group name="AnimalArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100} receiveShadow castShadow>
              <primitive object={nodes.Body} receiveShadow castShadow />
              <primitive object={nodes.IKBackLegL} receiveShadow castShadow />
              <primitive object={nodes.IKFrontLegL} receiveShadow castShadow />
              <primitive object={nodes.IKBackLegR} receiveShadow castShadow />
              <primitive object={nodes.IKFrontLegR} receiveShadow castShadow />
            </group>
            <group name="Cube" position={[0, 0, 0.062]} rotation={[-Math.PI / 2, 0, 0]} scale={100} receiveShadow castShadow>
              {/* @ts-ignore */}
              <skinnedMesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials.Material} skeleton={nodes.Cube_1.skeleton} receiveShadow castShadow />
              {/* @ts-ignore */}
              <skinnedMesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials['Material.001']} skeleton={nodes.Cube_2.skeleton} receiveShadow castShadow />
              {/* @ts-ignore */}
              <skinnedMesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials['Material.006']} skeleton={nodes.Cube_3.skeleton} receiveShadow castShadow />
              {/* @ts-ignore */}
              <skinnedMesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials['Material.003']} skeleton={nodes.Cube_4.skeleton} receiveShadow castShadow />
              {/* @ts-ignore */}
              <skinnedMesh name="Cube_5" geometry={nodes.Cube_5.geometry} material={materials['Material.002']} skeleton={nodes.Cube_5.skeleton} receiveShadow castShadow />
            </group>
          </group>
        </group>
      </group>
    </RigidBody>

  )
}

useGLTF.preload('./models/husky/Husky.glb')
