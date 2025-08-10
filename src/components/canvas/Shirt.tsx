'use client'

import { WhiteLogo } from '@/assets'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const Shirt = () => {
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  const logoTexture = useTexture(WhiteLogo.src)

  useFrame((state, delta) => {
    {
      // @ts-expect-error Maath Type script errors
      easing.dampC(materials.lambert1.color, 'black', 0.25, delta)
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <mesh
        castShadow
        // @ts-expect-error Maath Type script errors
        geometry={nodes.T_Shirt_male?.geometry}
        material={materials.lambert1}
        material-roughness={1}
        position={[0, 0, 0]}
      >
        <Decal
          position={[0, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.15}
          map={logoTexture}
          depthTest={false}
        />
        <Decal
          position={[0, 0.15, -0.15]}
          rotation={[0, Math.PI, 0]}
          scale={0.15}
          map={logoTexture}
          depthTest={false}
        />
      </mesh>
    </group>
  )
}

export default Shirt
