import React from 'react';
import { render } from '@testing-library/react-native';
import ListItem from '../ListItem';

test('should render the item id, name, and status', async () => {
    const item = {
        id: 1,
        nombre: 'Maria del Barrio',
        status: 'Inactivo'
    };

    const { getByText } = render(<ListItem item={item} />);

    // Espera a que se renderice el texto del id
    const idText = await getByText('1');
    // Espera a que se renderice el texto del nombre
    const nombreText = await getByText('Maria del Barrio');
    // Espera a que se renderice el texto del status
    const statusText = await getByText('Inactivo');

    // Verifica que los textos se hayan renderizado correctamente
    expect(idText).toBeTruthy();
    expect(nombreText).toBeTruthy();
    expect(statusText).toBeTruthy();
});