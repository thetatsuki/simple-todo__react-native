import React, {useState} from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TitleApp from "./src/components/TitleApp";
import Form from "./src/components/Form";
import Todo from "./src/components/Todo";

export default function App() {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

    const addNewTodo = () => {
        if (!value) {
            return null
        }
        const newTodo = {id: Date.now().toString(), text: value}
        setTodos(prev => [
            ...prev,
            newTodo
        ])

        setValue('')
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    console.log(todos)

    return (
        <View style={styles.container}>
            <TitleApp/>

            <Form
                setValue={setValue}
                value={value}
                addNewTodo={addNewTodo}
            />
            <ScrollView>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        flex: 1,
        marginTop: 30,
        textAlignVertical: "center",
        padding: 10,
        backgroundColor: '#F8F8F8'
    }
});
