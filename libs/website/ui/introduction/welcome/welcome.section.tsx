import { SplineComponent } from '@website/shared/ui/spline/spline-component'
/* import type { ThreeElements } from '@react-three/fiber' */
/* import { useFrame } from '@react-three/fiber' */
import React from 'react'
import { WELCOME_CONSTANTS } from '../constants/welcome.constants'
import { Welcome } from './welcome'

/* function Box(props: ThreeElements['mesh']) {
*   const meshRef = useRef<THREE.Mesh>(null!)
*   const [hovered, setHover] = useState(false)
*   const [active, setActive] = useState(false)
*   useFrame((state, delta) => (meshRef.current.rotation.x += delta))
*   return (
*     <mesh
*       {...props}
*       ref={meshRef}
*       scale={active ? 1.5 : 1}
*       onClick={event => setActive(!active)}
*       onPointerOver={event => setHover(true)}
*       onPointerOut={event => setHover(false)}
*     >
*       <boxGeometry args={[1, 1, 1]} />
*       <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
*     </mesh>
*   )
* } */

export function WelcomeSection() {
  return (
    <section className="relative flex justify-center w-full mx-auto lg:mx-0">
      {/* <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
 */}
      <SplineComponent
        className="absolute -bottom-16 lg:left-0 lg:top-0 lg:scale-[1.2]"
        link="https://prod.spline.design/nnjZJFW1wThAacUS/scene.splinecode"
      />
      <div className="w-full h-screen max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <section className="w-full lg:w-3/5">
          <Welcome socials={WELCOME_CONSTANTS.SOCIALS} />
        </section>
      </div>
    </section>
  )
}
