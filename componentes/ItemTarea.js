import React, { useState } from 'react';
import { StyleSheet, View, Text} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';

function ItemTarea(props) {

    const [id,setId] = useState(props.id);
    const [checked, setChecked] = useState(props.isChecked);

    const saveState = async (isChecked) => {
        setChecked(isChecked);
        const tareaJson = JSON.stringify({text: props.text, isChecked: isChecked, key: id});
        await AsyncStorage.setItem(id, tareaJson);
    };

    return (
        <View style={styles.tareaContainer}>
            <Checkbox
                color='#f09f48'
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    saveState(!checked);    
                }}  
            />
            <Text style={[styles.texto, checked && styles.textoDisabled]}>{props.text}</Text>
        </View>
    );
}

export default ItemTarea;

const styles = StyleSheet.create({
    tareaContainer: {
        marginHorizontal: 10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        minHeight: 30,
    },
    texto: {
        textAlign: 'justify',
        fontFamily: "JosefinSans-Regular",
        fontSize: 16,
        flex: 1,
        color: '#5A5A5A',
    },
    textoDisabled: {
        textDecorationLine: 'line-through',
    }
});