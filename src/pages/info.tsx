import React from 'react'

import { Container } from '../styles/pages/info'

const Info: React.FC = () => {
  return (
    <Container>
      <div className="image-info">
        <div>
          <img src="https://github.com/mateusfg7.png" alt="mateusfg7 profile" />
        </div>
        <div>
          email: mateusfg7@protonmail.com - mateusfelipefg77@gmail.com
          <br />
          telegram/keybase/reddit: mateusfg7
          <br />
          twitter: mateusfg77
          <br />
          <br />
          bitcoin: bc1qzdr4z8sxhumv68s2l97rj0pjum2tnr745uh8us
          <br />
          ethereum: 0x4a576AC4b87e3F22700dd3462e02d863Ce2B8817
          <br />
          <br />
          PGP: 5863 874C 7BBA FFE7 829F B89C 4151 BFF1 C8B0 B523 (fingerprint)
          <br />
          <br />
          v4sw5YUhw6pr7OFck5ma4u7Lw3Xl6OParrot/iOVSCode/e5t3b7en7g6ZGATSOa19s5MIr9p10/-10
          hackerkey.com
          <br />
          <br />
          -----BEGIN GEEK CODE BLOCK----- <br /> Version: 3.12 <br /> GAT C+++
          UL+++ L++++ W+++ V++ <br /> PS++ PE+++ Y++ PGP+++ tv+ b+++ <br /> G+++
          e+++ r++ <br /> ------END GEEK CODE BLOCK------ <br />
          <br />
          <a href="/info.asc">SIGNED FILE</a>
        </div>
      </div>
    </Container>
  )
}

export default Info
