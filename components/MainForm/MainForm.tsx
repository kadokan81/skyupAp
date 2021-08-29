import * as React from 'react';
import { Pressable, View } from 'react-native';
import CityModal from '../CityModal/CityModal';
import Form from '../Form';
import { Modal } from 'react-native';
import GlassView from '../glassView/GlassView';
import { Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export interface MainFormProps {
}

const MainForm: React.FC<MainFormProps> = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    const toogleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View
            style={{
                position: "absolute",
                width: "100%",
                height: 520,
                // backgroundColor: "white",
                top: 40,
                borderRadius: 30,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "white"
            }}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <CityModal toggleModal={toogleModal} />
            </Modal>
            <Pressable
                style={{
                    top: 0,
                    position: "absolute",
                    width: "100%",
                    alignItems: "center",
                }}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <View
                    style={{
                        position: 'absolute',
                        width: "100%",
                        alignItems: "center",
                        top: 250,
                        transform: [{ translateY: -250 }]

                    }}
                >

                    <Form
                        title="Kiev"
                        subtitle="Departure city"
                        code="KBR"
                    />

                </View>

            </Pressable>
            <Pressable
                style={{
                    top: -15,
                    position: "absolute",
                    width: "100%",
                    alignItems: "center",

                }}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <View
                    style={{
                        position: 'absolute',
                        width: "100%",
                        alignItems: "center",
                        top: 420,
                        transform: [{ translateY: -250 }]

                    }}
                >

                    <Form
                        border={true}
                        title="Alicante"
                        subtitle="Arival city"
                        code="KBR"
                    />

                </View>

            </Pressable>
            <GlassView
                styleProps={{
                    position: 'absolute',
                    width: "49%",
                    top: 560,
                    minHeight: 70,
                    transform: [{ translateY: -250 }],
                    padding: 20,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 15,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}
                >
                    Departure
                </Text>
                <Entypo name="dots-three-horizontal" size={44} color="white" />
            </GlassView>
            <GlassView
                styleProps={{
                    position: 'absolute',
                    right: 0,
                    width: "49%",
                    top: 560,
                    minHeight: 80,
                    transform: [{ translateY: -250 }],
                    padding: 20,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}
            >
                <Text
                    style={{

                        color: "white",
                        fontSize: 15,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}
                >
                    return
                </Text>
                <Entypo name="dots-three-horizontal" size={44} color="white" />

            </GlassView>
            <GlassView
                styleProps={{
                    position: 'absolute',
                    width: "32%",
                    top: 670,
                    minHeight: 80,
                    transform: [{ translateY: -250 }],
                    padding: 20,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}
            >
                <Text
                    style={{

                        color: "white",
                        fontSize: 15,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}
                >
                    Adult
                </Text>
                <Text
                    style={{
                        color: "white",
                        fontSize: 50,
                        fontFamily: "Bebas",
                    }}
                >2</Text>
            </GlassView>


            <GlassView
                styleProps={{
                    position: 'absolute',
                    width: "32%",
                    top: 670,
                    alignSelf: "center",

                    // right: "35%",
                    minHeight: 80,
                    transform: [{ translateY: -250 }],
                    padding: 20,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontSize: 15,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}
                >
                    cnildren
                </Text>
                <Text
                    style={{
                        color: "white",
                        fontSize: 50,
                        fontFamily: "Bebas",
                    }}
                >0</Text>

            </GlassView>

            <GlassView
                styleProps={{
                    position: 'absolute',
                    width: "32%",
                    top: 670,
                    right: 0,
                    minHeight: 80,
                    transform: [{ translateY: -250 }],
                    padding: 20,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}
            >
                <Text
                    style={{

                        color: "white",
                        fontSize: 15,
                        textTransform: "uppercase",
                        fontWeight: "bold",
                    }}
                >
                    infants
                </Text>
                <Text
                    style={{
                        color: "white",
                        fontSize: 50,
                        fontFamily: "Bebas",
                    }}
                >0</Text>
            </GlassView>


        </View>
    );
}

export default MainForm;