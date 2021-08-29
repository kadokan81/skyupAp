import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import GlassView from '../glassView/GlassView';

export interface FormProps {
    // position: string,
    title: string,
    subtitle: string,
    code: string,
    border?: boolean,
}


const Form = ({ title, subtitle, code, border }: FormProps) => {
    return (
        <View

            style={{
                position: "absolute",
                // backgroundColor: "rgba( 255, 255, 255, 0.5 )",
                // paddingHorizontal: 15,
                // paddingVertical: 15,
                // borderColor: "white",
                // borderWidth: 1,
                // borderTopLeftRadius: border ? 20 : 0,
                // borderTopRightRadius: border ? 20 : 0,
                width: "100%",
                overflow: "hidden"
            }}>
            <GlassView
                styleProps={{
                    paddingVertical: 15,
                    paddingHorizontal: 15,
                    // borderTopLeftRadius: border ? 20 : 0,
                    // borderTopRightRadius: border ? 20 : 0,
                    // borderRadius: 20,
                    overflow: "hidden"

                }}
            >
                <Text style={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    textShadowOffset: { width: -1, height: 3 },
                    textShadowRadius: 5
                }}>
                    {subtitle}
                </Text>

                <Text
                    style={{
                        fontSize: 50,
                        color: "white",
                        fontWeight: "bold",
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: { width: -1, height: 5 },
                        textShadowRadius: 5
                    }}>
                    {title}
                </Text>
                <Text style={{
                    fontSize: 25,
                    color: "white",
                    fontWeight: "bold",
                    textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    textShadowOffset: { width: -1, height: 5 },
                    textShadowRadius: 4
                }}>{code}</Text>
            </GlassView>


        </View>

    );
}

export default Form;