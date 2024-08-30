import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';

import CounterApp from '../../src/components/CounterApp';

describe('test on <CounterApp/>', () => {


    const title = 'Hola, Soy title';
    const value = 100

    test('debe hacer match con el snapshot', () => {

        const { container } = render(<CounterApp title={title} value={value} />);


        expect(container).toMatchSnapshot()
    });

    test('debe mostrar el valor inicial de 100', () => {
        // Renderizamos el componente con title y value
        const { getByText } = render(<CounterApp title={title} value={value} />);

        // Verificamos que el valor inicial de 100 esté presente en el componente
        expect(getByText(value.toString())).toBeTruthy();
    });



    test('debe de retornar un evento click que incremente value en una unidad', () => {
        
        render(<CounterApp title={title} value={value} />);
        fireEvent.click(screen.getByText('Increment'))
        expect(screen.getByText('101')).toBeTruthy()


    });
    
    test('debe de retornar un evento click que decremente value en una unidad', () => {
        
        render(<CounterApp title={title} value={value} />);
        fireEvent.click(screen.getByText('Decrement'))
        expect(screen.getByText('99')).toBeTruthy()


    });

        
    test('debe de retornar un evento click que rectee value a su valor original', () => {
        
        render(<CounterApp title={title} value={value} />);
        fireEvent.click(screen.getByText('Decrement'))
        fireEvent.click(screen.getByText('Decrement'))
        expect(screen.getByText('98')).toBeTruthy()

        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('100')).toBeTruthy()
        screen.debug()


    });
});
