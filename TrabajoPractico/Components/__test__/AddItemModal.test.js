import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddItemModal from '../AddItemModal';

describe('AddItemModal', () => {
    it('renders correctly', () => {
        const { getByPlaceholderText, getByText } = render(<AddItemModal />);
        const idInput = getByPlaceholderText('Ingresar ID');
        const nombreInput = getByPlaceholderText('Ingresar Nombre');
        const estadoInput = getByPlaceholderText('Ingresar Estado');
        const addButton = getByText('Añadir Contacto');
        const cancelButton = getByText('Cancelar');

        expect(idInput).toBeTruthy();
        expect(nombreInput).toBeTruthy();
        expect(estadoInput).toBeTruthy();
        expect(addButton).toBeTruthy();
        expect(cancelButton).toBeTruthy();
    });

    it('calls setNewItem function on input change', () => {
        const setNewItemMock = jest.fn();
        const { getByPlaceholderText } = render(
            <AddItemModal setNewItem={setNewItemMock} newItem={{ id: '', nombre: '', status: '' }} />
        );
        const idInput = getByPlaceholderText('Ingresar ID');

        fireEvent.changeText(idInput, '123');

        expect(setNewItemMock).toHaveBeenCalledWith({ id: '123', nombre: '', status: '' });
    });

    it('calls addItem function on Add button press', () => {
        const addItemMock = jest.fn();
        const { getByText } = render(<AddItemModal addItem={addItemMock} />);

        const addButton = getByText('Añadir Contacto');
        fireEvent.press(addButton);

        expect(addItemMock).toHaveBeenCalled();
    });

    it('calls setModalVisible function on Cancel button press', () => {
        const setModalVisibleMock = jest.fn();
        const { getByText } = render(<AddItemModal setModalVisible={setModalVisibleMock} />);

        const cancelButton = getByText('Cancelar');
        fireEvent.press(cancelButton);

        expect(setModalVisibleMock).toHaveBeenCalledWith(false);
    });
});