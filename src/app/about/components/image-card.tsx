'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

export function ImageCard({ mobile = false }) {
  return (
    <Tilt
      className="overflow-hidden rounded-3xl shadow-2xl dark:shadow-black"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glarePosition="all"
      glareBorderRadius="1.5rem"
      glareMaxOpacity={0.4}
      glareReverse
      glareEnable
      trackOnWindow
      gyroscope
      tiltReverse
    >
      <Image
        src="https://github.com/mateusfg7.png"
        height={460}
        width={460}
        alt="Mateus Felipe's picture"
        className={`object-cover dark:brightness-75 ${
          !mobile && 'h-[30rem] w-96'
        }`}
      />
    </Tilt>
  )
}
