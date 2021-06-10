import React from 'react';
import {Image, Text, View, StyleSheet} from "react-native";
import menu from "../../assets/menu.png";

const TitleApp = () => {
    return (
        <View style={styles.header}>
            <Image
                style={styles.header__logo}
                source={menu}
            />
            <Text
                style={styles.header__title}
            >
                Все заметки
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 140
    },
    header__logo: {
        width: 20,
        height: 20,
    },
    header__title: {
        fontSize: 18
    }
})

export default TitleApp;