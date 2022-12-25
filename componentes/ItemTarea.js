import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function ItemTarea(props) {
    return (
        <View style={styles.tareaContainer}>
            <BouncyCheckbox
                textStyle = {{textAlign: 'justify'}}
                text = {props.text}
                onPress={(isChecked) => {}} 
            />
        </View>
    );
}

export default ItemTarea;

const styles = StyleSheet.create({
    tareaContainer: {
        width: '83%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        minHeight: 30,
    },
});