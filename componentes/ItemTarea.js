import React, { useState } from 'react';
import { StyleSheet, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

function ItemTarea(props) {

    const [id,setId] = useState(props.id);

    const saveState = async (isChecked) => {
        const tareaJson = JSON.stringify({text: props.text, isChecked: isChecked, key: id});
        await AsyncStorage.setItem(id, tareaJson)
    };

    return (
        <View style={styles.tareaContainer}>
            <BouncyCheckbox
                textStyle = {{textAlign: 'justify'}}
                text = {props.text}
                isChecked = {props.isChecked}
                onPress={(isChecked) => {
                    saveState(isChecked);
                }} 
            />
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
});