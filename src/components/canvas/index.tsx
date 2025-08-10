'use client'

import { Center } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

const Shirt = dynamic(() => import('./Shirt'), { ssr: false })
const CameraRig = dynamic(() => import('./CameraRig'), { ssr: false })

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4], fov: 25 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      className='size-full transition-all ease-in'
    >
      <ambientLight intensity={0.7} />
      <CameraRig>
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
