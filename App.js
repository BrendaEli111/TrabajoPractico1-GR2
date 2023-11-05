import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ListItem from './Components/ListItem';
import AddItemModal from './Components/AddItemModal';

const App = () => {
  const [data, setData] = useState([
    { id: 1, nombre: "Gabriela", status: "Activo" },
    { id: 2, nombre: "Maldonado", status: "Inactivo" },
    { id: 3, nombre: "Luis", status: "Activo" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newItem, setNewItem] = useState({ id: '', image: '' });

  const addItem = () => {
    if (newItem.id && newItem.nombre && newItem.status) {
      setData((prevData) => [...prevData, newItem]);
      setNewItem({ id: '', nombre: '', status: '' });
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Añadir Contacto" onPress={() => setModalVisible(true)} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListItem item={item} />}
      />

      <AddItemModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
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

export default App;
