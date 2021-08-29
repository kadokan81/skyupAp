import * as React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { BlurView } from 'expo-blur';
export interface GlassViewProps {
    children: React.ReactElement<any, any> | JSX.Element[],
    styleProps?: {}
}


const GlassView: React.FC<GlassViewProps> = ({ children, styleProps }) => {
    return (

        <BlurView
            intensity={90}
            style={{
                ...styleProps,
            }}>
            {children}

        </BlurView>
    );
}

export default GlassView;

const Container = styled.View`
  flex: 1;
  background: rgba( 255, 255, 255, 0.5 );
  border: 1px solid white;
  box-shadow: 10px 5px 5px rgba( 255, 255, 255, 1 );
  
`;