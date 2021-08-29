import * as React from 'react';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import Slide from '../../components/Slide';
import infoData from '../../data/data';
import { FontAwesome5 } from '@expo/vector-icons';


export interface MainPageProps {
    navigation: any
}

const MainPage: React.FC<MainPageProps> = ({ navigation }) => {
    return (
        <>
            <Pressable
                onPress={() => navigation.toggleDrawer()}
                style={{
                    width: 50,
                    height: 50,
                    position: "absolute",
                    top: 50,
                    right: 0,
                    zIndex: 4
                }}>
                <FontAwesome5 name="bars" size={24} color="black" />
            </Pressable>
            <FlatList
                style={{ flex: 1 }}
                data={infoData}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Slide slideInfo={item} />
                }

                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={true}
            />
        </>
    );
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});