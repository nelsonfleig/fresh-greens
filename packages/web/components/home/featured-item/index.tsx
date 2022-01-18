import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

interface Props {}

const FeaturedItemWrapper = styled.div`
  flex: 1 0 45%;
  overflow: hidden;
  border-radius: ${props => props.theme.styles.borderRadius};
  border: 1px solid #ccc;
  @media screen and (min-width: 800px) {
    flex: 1 0 30%;
  }
`;

const FeaturedItemImage = styled.div`
  height: 168px;
  position: relative;
`;

const FeaturedItemInfo = styled.div`
  padding: 10px;
`;

const FeaturedItemOverlay = styled.div`
  background: red;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

export const FeaturedItem = (props: Props) => {
  return (
    <FeaturedItemWrapper>
      <FeaturedItemImage>
        <Image
          src={
            'https://res.cloudinary.com/glovoapp/w_450,h_250,c_fill,f_auto,q_auto/Stores/gutgi1gnn2hdegyj6qgf'
          }
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <FeaturedItemOverlay />
      </FeaturedItemImage>
      <FeaturedItemInfo>
        <h4>Store name</h4>
      </FeaturedItemInfo>
    </FeaturedItemWrapper>
  );
};
