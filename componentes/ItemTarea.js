import React from 'react';
import { StyleSheet, View} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function ItemTarea(props) {
    return (
        <View style={styles.tareaContainer}>
            <BouncyCheckbox
                textStyle = {{textAlign: 'justify'}}
                text = {props.text}
                isChecked = {props.isChecked}
                onPress={(isChecked) => {}} 
            />
        </View>
    );
}

export default ItemTarea;

const styles = StyleSheet.create({
    tareaContainer: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        minHeight: 30,
    },
});