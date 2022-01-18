import Image from 'next/image';
import React from 'react';
import { HeroContent, HeroImage, HeroWrapper } from './styles';

interface Props {}

export const Hero = (props: Props) => {
  return (
    <HeroWrapper>
      <HeroContent>
        <h2>Organic Foods</h2>
        <h3>delivered straight from the source</h3>
      </HeroContent>
      <HeroImage>
        <Image src="/images/hero-image.png" layout="fill" objectFit="contain" />
      </HeroImage>
    </HeroWrapper>
  );
};
