import React from 'react';
import { Modal, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const AddItemModal = ({ modalVisible, setModalVisible, newItem, setNewItem, addItem }) => {
    return (
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresar ID"
                    value={newItem.id}
                    onChangeText={(text) => setNewItem({ ...newItem, id: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingresar Nombre"
                    value={newItem.nombre}
                    onChangeText={(text) => setNewItem({ ...newItem, nombre: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Ingresar Estado"
                    value={newItem.status}
                    onChangeText={(text) => setNewItem({ ...newItem, status: text })}
                />
                <TouchableOpacity style={styles.button} onPress={addItem}>
                    <Text style={styles.buttonText}>Añadir Contacto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default AddItemModal;
