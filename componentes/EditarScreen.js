import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, View, Modal, KeyboardAvoidingView, TextInput} from 'react-native';
import ItemTarea from './ItemTarea';
import { TareaContext } from '../context/TareaContext';

function EditarScreen() {

    const {
        tareas,
        deleteTarea,
        loadTareas,
        updateTarea
    } = useContext(TareaContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [tareaEdit, setTareaEdit] = useState();
    const [keyPorEditar, setKeyPorEditar] = useState();

  useEffect(() => {if (!modalVisible) loadTareas()},[modalVisible]);

  const openEditar = ({keyPorEditar, texto}) => {
    console.log("editar");
    setTareaEdit(texto);
    setKeyPorEditar(keyPorEditar);
    setModalVisible(true);
  };

  const guardarEdicion = () => {
    var tarea = JSON.parse(JSON.stringify(tareas.find(t => t.key == keyPorEditar)));
    tarea.text = tareaEdit;
    updateTarea(tarea);
    setModalVisible(false);
  };

    return (
      <SafeAreaView style={{ flex:1, backgroundColor: 'white'}}>

        <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
            <KeyboardAvoidingView style={styles.vistaCentrada}>
                <View style={styles.modal}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.editor} 
                            value={tareaEdit}
                            onChangeText={texto => setTareaEdit(texto)}
                        />
                    </View>
                    <TouchableOpacity onPress={guardarEdicion}>
                        <View style={styles.buttonGuardar}>
                            <Text style={{color:'#FFFFFF', fontSize: 16}}>Guardar cambios</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.buttonCancelar}>
                            <Text style={{color:'#FFFFFF', fontSize: 16}}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>

        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Editar tareas</Text>
        <ScrollView>
            {tareas.map((t) => (
                <View style={styles.containerTarea}>
                    <ItemTarea text={t.text} isChecked={t.isChecked} id={t.key}/>
                    <TouchableOpacity onPress={() => openEditar({keyPorEditar: t.key, texto: t.text})}>
                        <View style={styles.buttonEditar}>
                            <Text style={{color:'#FFFFFF', fontSize: 12}}>editar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> deleteTarea(t.key)}>
                        <View style={styles.buttonBorrar}>
                            <Text style={{color:'#FFFFFF', fontSize: 12}}>eliminar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
      </SafeAreaView>
    );
}

export default EditarScreen;

const styles = StyleSheet.create({
    containerTarea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        minHeight: 30,
        flex: 1,
    },
    buttonBorrar:{
        height: 20,
        width: 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#ff5f5f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonEditar:{
        height: 20,
        width: 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#f09f48',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vistaCentrada: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal:{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    editor: {
        flex: 1,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 10,
        color: '#000'
    },
    buttonGuardar: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#f09f48',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonCancelar: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#ff5f5f',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
});