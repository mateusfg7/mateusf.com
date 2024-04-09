'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { placeholder } from '../../../lib/placeholder'

import lightPic from './light-pic.jpg'
import darkPic from './dark-pic.png'

export function ImageCard({ mobile = false }) {
  if (mobile) {
    return (
      <>
        <Image
          src={lightPic}
          alt="Mateus Felipe's picture"
          className="my-5 size-96 rounded-3xl border border-neutral-800 object-cover dark:hidden"
          placeholder={placeholder(460, 460) as `data:image/${string}`}
          priority
        />
        <Image
          src={darkPic}
          alt="Mateus Felipe's picture"
          className="my-5 hidden rounded-3xl border border-neutral-500 object-cover dark:block"
          placeholder={placeholder(460, 460) as `data:image/${string}`}
          priority
        />
      </>
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
        src={lightPic}
        alt="Mateus Felipe's picture"
        className="h-[30rem] w-96 object-cover dark:hidden"
        placeholder={placeholder(460, 460) as `data:image/${string}`}
        priority
      />
      <Image
        src={darkPic}
        alt="Mateus Felipe's picture"
        className="hidden h-[30rem] w-96 object-cover brightness-90 dark:block"
        placeholder={placeholder(460, 460) as `data:image/${string}`}
        priority
      />
    </Tilt>
  )
}
