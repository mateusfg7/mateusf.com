'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { placeholder } from '../../../lib/placeholder'

export function ImageCard({ mobile = false }) {
  if (mobile) {
    return (
      <Image
        src="https://github.com/mateusfg7.png"
        height={460}
        width={460}
        alt="Mateus Felipe's picture"
        className="my-5 rounded-3xl border border-neutral-800 object-cover dark:border-neutral-500"
        placeholder={placeholder(460, 460) as `data:image/${string}`}
        priority
      />
    )
  }

  return (
    <Tilt
      className="w-fit overflow-hidden rounded-3xl shadow-xl dark:shadow-none"
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
        className="h-[30rem] w-96 object-cover dark:brightness-90"
        placeholder={placeholder(460, 460) as `data:image/${string}`}
        priority
      />
    </Tilt>
  )
}
