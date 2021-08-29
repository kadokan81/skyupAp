import { BlurView } from 'expo-blur';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { citi_data } from '../../data/citis';
import { useEffect } from 'react';

export interface CityModalProps {
    toggleModal: () => void
}

const CityModal: React.FC<CityModalProps> = ({ toggleModal }) => {
    const [departureCiti, setDepartureCiti] = useState("")

    const [dataCitiArray, setDataCitiArray] = useState(citi_data)

    useEffect(() => {
        filterDataArray()
    }, [departureCiti])

    const filterDataArray = () => {
        const searchData = dataCitiArray.filter(data =>
            data.city.toLowerCase().indexOf(departureCiti.toLowerCase()) !== -1)


        setDataCitiArray(searchData)
        if (departureCiti.length === 0) {
            setDataCitiArray(citi_data)
        }

    }

    return (
        <View style={{
            flex: 1,
            position: "absolute",
            alignItems: "center",
            width: "95%",
            height: "55%",
            top: 200,
            alignSelf: "center",
            borderRadius: 30,
            overflow: "hidden",
        }} >
            <Pressable
                style={{
                    alignSelf: "flex-end",
                    right: 25,
                    top: 15,
                }}
                onPress={() => { toggleModal() }}
            >
                <AntDesign name="closecircle" size={30} color="white" />
            </Pressable>

            <BlurView
                intensity={70}
                tint="light"
                style={{
                    flex: 1,
                    position: "absolute",
                    alignItems: "center",
                    width: "100%",
                    height: "90%",
                    top: 50,
                    paddingTop: 10,
                    paddingHorizontal: 20,
                    alignSelf: "center",
                    borderRadius: 30,
                    overflow: "hidden",
                }}>


                <TextInput
                    placeholder='Enter city or country...'
                    value={departureCiti}
                    // onKeyPress={(filterDataArray}
                    onChangeText={text => { setDepartureCiti(text) }}
                    style={{
                        width: "100%",
                        height: 50,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        borderColor: "white",
                        borderRadius: 15,
                        fontSize: 25,
                        fontWeight: "bold",
                        color: "rgba(18,74,163, 1)",
                    }}
                />
                <FlatList
                    style={{
                        width: "100%"
                    }}
                    data={dataCitiArray}
                    renderItem={({ item }) => {

                        return (
                            <View style={{
                                flexDirection: "row",
                                alignSelf: "flex-end",
                                justifyContent: "space-between",
                                borderBottomWidth: 1,
                                borderBottomColor: "white",
                                width: "100%"
                            }}>
                                <Pressable
                                    onPress={() => { setDepartureCiti(item.city) }}
                                >
                                    <Text
                                        style={{
                                            color: "white",
                                            fontSize: 30,
                                            marginBottom: 10
                                        }}
                                    >
                                        {item.city}
                                    </Text>
                                </Pressable>
                                <Text
                                    style={{
                                        alignSelf: "flex-end",
                                        color: "black",
                                        fontSize: 20,
                                        marginBottom: 10
                                    }}
                                >
                                    {item.country}
                                </Text>
                                <Text
                                    style={{
                                        alignSelf: "flex-end",
                                        color: "black",
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        marginBottom: 10
                                    }}
                                >
                                    {item.code}
                                </Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.code}
                />

            </BlurView>
        </View >


    );
}

export default CityModal;