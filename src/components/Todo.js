import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Button} from "react-native";

const Todo = ({todo, removeTodo}) => {

    const [open, setOpen] = useState(false)

    const changeOpen = () => {
        setOpen(prev => !prev)
        console.log(open)
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => changeOpen()}
                style={styles.taskItem}
            >
                <Text
                    style={styles.taskText}
                >
                    {todo.text}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={open ? {display: 'flex'} : {display: 'none'}}
                title="Deletes"
                color="#323232"
                onPress={() => removeTodo(todo.id)}
            >
                <Text style={styles.button__text}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    taskItem: {
        marginTop: 10,
        width: "100%",
        backgroundColor: '#FFF',
        padding: 10,
        paddingLeft: 20,
    },
    taskText: {
        color: 'black',
        fontSize: 16,
        display: 'flex',
        width: '100%'
    },
    button__text: {
        backgroundColor: '#323232',
        color: '#ffffff',
        padding: 5,
        textAlign: 'center',
        fontSize: 16
    }
})

export default Todo;