import React from 'react';
import { StyleSheet, View} from "react-native";
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
        marginRight: 100,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        minHeight: 30,
    },
});