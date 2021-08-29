import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';


export interface ContactPageProps {

}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Text>Contact Page</Text>
        </SafeAreaView>
    );
}

export default ContactPage;