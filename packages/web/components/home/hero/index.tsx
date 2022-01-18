import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Container } from '../..';
import { flex } from '../../../theme';

interface Props {}

const HeroWrapper = styled.div`
  display: flex;
  min-height: 500px;
  padding: ${props => props.theme.layout.section};
`;

const HeroContent = styled.div`
  flex: 1;
  width: 50%;
  align-self: center;
  justify-self: center;
  h2 {
    font-family: 'Abril Fatface', cursive;
    font-size: 64px;
    color: ${props => props.theme.colors.lightGreen};
    margin-bottom: 10px;
  }
  h3 {
    color: ${props => props.theme.colors.darkGreen};
    font-size: 24px;
    font-weight: 500;
  }
`;
const HeroImage = styled.div`
  flex: 1;
  width: 50%;
  position: relative;
`;

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
