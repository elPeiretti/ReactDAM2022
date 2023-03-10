import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Text} from "react-native";


const InputTarea = (props) => {

    const [tarea, setTarea] = useState();

    const agregarTarea = (t) => {
        if (t==null) return;
        props.agregarTarea({text: t, isChecked: false});
        setTarea(null);
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput 
                style={styles.input}
                value={tarea}
                onChangeText={text => setTarea(text)}
                placeholder={'Agregue una tarea...'}
            />
            <TouchableOpacity onPress={() => agregarTarea(tarea)}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

export default InputTarea;

const styles = StyleSheet.create({
    container: {
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 12,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        bottom: 20
    },

    input: {
        height: 50,
        flex: 1,
        color: '#000000',
    },

    button:{
        height: 40,
        width: 40,
        borderRadius: 10,
        backgroundColor: '#f09f48',
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        fontSize: 20,
        color: '#FFFFFF'
    }
})