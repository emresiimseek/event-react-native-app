import React from 'react';
import { Alert, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Button from '../common-components/Button';

function WelcomePage(props) {
    return (
        <ImageBackground style={styles.background} source={require("../assets/img/fun.jpg")}>
            <SafeAreaView>
                <View style={styles.topArea}>
                    <View style={styles.slideArea}>
                        <Text style={styles.textArea}>
                            BeSocail ile tanış!{"\n"}{"\n"}
                            Etkinlik düzenle,{"\n"}
                            Etkinliklere katıl,{"\n"}
                            Yeni insanlar ile tanış.{"\n"}
                        </Text>
                    </View>

                </View>
                <View style={styles.bottomArea}>
                    <Button text="Giriş" onPress={() => Alert.alert("selam")} />
                    <Button text="Kaydol" />

                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    bottomArea: {
        height: '20%',
        marginHorizontal: 10,
    },
    topArea: {
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    slideArea: {
        backgroundColor: '#00000050',
        width: '90%',
        height: '60%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textArea: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    }
})

export default WelcomePage;
