import React from 'react';
import {Button, TextInput, View, StyleSheet, Dimensions} from "react-native";

const width = Dimensions.get('window').width;

const Form = ({addNewTodo, setValue, value}) => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder='Введите текст...'
            />
            <Button
                style={styles.button}
                onPress={addNewTodo}
                title="ADD"
                color="#323232"
                accessibilityLabel="Add new todo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingBottom: 10
    },
    input: {
        backgroundColor: '#FFF',
        paddingTop: 5,
        paddingLeft: 15,
        paddingBottom: 5,
        paddingRight: 10,
        width: (width - 60),
        borderRadius: 5,
    },
})

export default Form;