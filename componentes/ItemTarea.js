import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function ItemTarea(props) {
    return (
        <View style={styles.container}>
            <View style={styles.tareaContainer}>
                <BouncyCheckbox
                    text = {props.text}
                    onPress={(isChecked) => {}} 
                />
            </View>
        </View>
    );
}

export default ItemTarea;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    tareaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
});