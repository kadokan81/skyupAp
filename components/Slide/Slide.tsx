import * as React from 'react';
import { Animated, Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { Dimensions, Image, View } from 'react-native';
import infoData from '../../data/data';
import Form from '../Form/Form';
import { CityDataList } from '../../types'
import { useState } from 'react';
import { useRef } from 'react';
import { Modal } from 'react-native';
import CityModal from '../CityModal/CityModal';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import GlassView from '../glassView/GlassView';
import MainPage from '../../pages/mainPage/MainPage';
import MainForm from '../MainForm/MainForm';


export type SlideProps = {
    slideInfo: CityDataList
}

const obj = infoData[0]
const Slide = ({ slideInfo }: SlideProps) => {
    const [modalVisible, setModalVisible] = useState(false);

    const { city, img, price } = slideInfo
    const value = useRef(new Animated.Value(250)).current;
    const fontValue = useRef(new Animated.Value(50)).current;



    const ScaleText = () => {
        Animated.timing(fontValue, {
            toValue: 60,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
    const deScaleText = () => {
        Animated.timing(fontValue, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    const moveTitle = () => {
        Animated.timing(value, {
            toValue: 650,
            duration: 300,
            useNativeDriver: false
        }).start()
    }
    const moveTitleDown = () => {
        Animated.timing(value, {
            toValue: 250,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const toogleModal = () => {
        setModalVisible(!modalVisible)
    }




    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
    let [fontsLoaded] = useFonts({
        Bebas: require("../../assets/fonts/BebasNeue-Regular.ttf"),

    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (
            <View
                style={{
                    flex: 1,
                    height: windowHeight,
                    width: windowWidth,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <View style={{
                    width: 300,
                    height: 200,
                    position: "absolute",
                    zIndex: 10,
                    top: 200
                }}>

                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}

                >
                    <CityModal toggleModal={toogleModal} />
                </Modal>
                <Animated.Text
                    style={{
                        color: "white",
                        fontSize: 25,
                        fontWeight: "bold",
                        position: "absolute",
                        top: value,
                        left: 20,
                        zIndex: 3,
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: { width: -1, height: 5 },
                        textShadowRadius: 5,
                        transform: [{ translateY: -20 }]
                    }}
                > from{price} $</Animated.Text>

                <Animated.Text
                    style={{
                        width: "100%",
                        color: "white",
                        fontSize: fontValue,
                        fontWeight: "bold",
                        position: "absolute",
                        top: value,
                        transform: [{ translateY: -80 }],
                        left: 20,
                        zIndex: 3,
                        textShadowColor: 'rgba(0, 0, 0, 0.8)',
                        textShadowOffset: { width: 1, height: 5 },
                        textShadowRadius: 5

                    }}
                >{city}</Animated.Text>

                <ScrollView
                    style={{
                        flex: 1
                    }}
                    scrollEventThrottle={16}
                    onScroll={(event) => {
                        const coord = Math.floor(event.nativeEvent.contentOffset.y)
                        { coord < 0 && ScaleText() }
                        { coord > 0 && deScaleText() }

                        { coord < 0 && moveTitle() }
                        { coord > 0 && moveTitleDown() }

                    }}

                >
                    <Image
                        blurRadius={2}
                        source={{ uri: img }}
                        style={{ width: windowWidth, height: windowHeight, flex: 1 }} />
                </ScrollView>

                <Animated.Text
                    style={{
                        position: "absolute",
                        fontFamily: "Bebas",
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "white",
                        padding: 15,
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: { width: -1, height: 5 },
                        textShadowRadius: 5,
                        alignSelf: "flex-start",
                        top: value,
                        transform: [{ translateY: 30 }]
                    }}
                >MON   TUE   WEN   THU   FRI    SUT   SUN</Animated.Text>
                <Animated.View
                    style={{
                        position: 'absolute',
                        width: "96%",
                        alignItems: "center",
                        top: value,
                        transform: [{ translateY: 50 }],
                    }}
                >
                    <MainForm
                    />
                </Animated.View>

                {/* <Pressable
                    style={{
                        position: "absolute",
                        width: "100%",
                        alignItems: "center",

                    }}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Animated.View
                        style={{
                            position: 'absolute',
                            width: "100%",
                            alignItems: "center",
                            top: value,
                            transform: [{ translateY: -250 }]

                        }}
                    >

                        <Form
                            border={true}
                            title="Kiev"
                            subtitle="Departure city"
                            code="KBR"
                        />

                    </Animated.View>

                </Pressable> */}

                {/* <Animated.View
                    style={{
                        position: 'absolute',
                        width: "100%",
                        alignItems: "center",
                        top: value,
                        transform: [{ translateY: 380 }]
                    }}
                >
                    <Form
                        title="Alicante"
                        subtitle="Arrival city"
                        code="ALT"
                    />
                </Animated.View> */}
                {/* <Animated.View
                    style={{
                        backgroundColor: "red",
                        position: 'absolute',
                        width: "50%",
                        alignItems: "center",
                        alignSelf: "flex-start",
                        bottom: 0,
                        // top: value,
                        transform: [{ translateY: -450 }]

                    }}

                >
                    <GlassView>
                        <Text>
                            Departure
                        </Text>
                    </GlassView>

                </Animated.View> */}


            </View>
        );
    }

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        },
        modalView: {
            width: "80%",
            height: "40%",
            margin: 20,
            backgroundColor: "rgba(255,255,255, 0.7)",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: "#F194FF",
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        },
        absolute: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    })
};


export default Slide;
