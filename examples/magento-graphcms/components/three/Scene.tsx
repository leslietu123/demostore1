/* eslint-disable react/no-unknown-property */
import { Float, MeshWobbleMaterial } from '@react-three/drei'
import { useThree, useFrame, Vector3, extend } from '@react-three/fiber'
import { motion, MotionCanvas, LayoutOrthographicCamera } from 'framer-motion-3d'
import SimplexNoise from 'simplex-noise'
import * as THREE from 'three'
import { transition } from './settings'

extend(THREE)

function Lights() {
  const three = useThree()
  useFrame(() => three.camera.lookAt(0, 0, 0))

  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight intensity={0.5} position={[0, 5, 0]} rotation={[1.8, 0, 0]} />
      <directionalLight intensity={1} position={[0, 0, 5]} rotation={[0, 0, 0]} />
    </>
  )
}

function Box({ position }: { position: Vector3 }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <motion.meshStandardMaterial color='blue' />
    </mesh>
  )
}

function Geometry({ size = 20 }) {
  const boxes: JSX.Element[] = []
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (r % 2) {
        const yOffset = c % 2 ? 1 : 0
        boxes.push(<Box key={`${r}-${c}`} position={[c, r + yOffset, 0]} />)
      }
    }
  }

  const offset = -Math.ceil(size / 2)
  return <group position={[offset, offset, 0]}>{boxes}</group>
}

export function Scene({ isFullscreen }) {
  return (
    <MotionCanvas dpr={[1, 2]}>
      <LayoutOrthographicCamera
        initial={false}
        animate={
          isFullscreen
            ? {
                x: 10,
                y: 10,
                z: 10,
                zoom: 100,
              }
            : { x: 0, y: 0, z: 5, zoom: 67 }
        }
        transition={
          isFullscreen
            ? { ...transition, delay: 0.2, duration: transition.duration - 0.2 }
            : transition
        }
      />
      <Lights />
      <Geometry />
    </MotionCanvas>
  )
}
