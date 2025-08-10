'use client'

import { ThreeElements, useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { ReactNode, useRef } from 'react'

interface CameraRigProps {
  children: ReactNode
}

const CameraRig = ({ children }: CameraRigProps) => {
  const group = useRef<ThreeElements['group']>(null)

  useFrame((frameState, delta) => {
    const isBreakpoint = window.innerWidth <= 1260
    const isMobile = window.innerWidth <= 600

    let targetPosition: [number, number, number] = [0, 0, 2]
    if (isBreakpoint) targetPosition = [0, 0, 2]
    if (isMobile) targetPosition = [0, 0, 2.5]

    easing.damp3(frameState.camera.position, targetPosition, 0.25, delta)

    if (group.current) {
      easing.dampE(
        // @ts-expect-error Maath Type script errors
        group.current.rotation,
        [frameState.pointer.y / 10, -frameState.pointer.x / 5, 0],
        0.25,
        delta
      )
    }
  })

  return <group ref={group}>{children}</group>
}

export default CameraRig
