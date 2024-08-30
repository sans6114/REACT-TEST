import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('test on 06-deses-obj', () => {
    

    test('usContext tiene que retornar un objeto mapeado, osea con modificaciones', () => {
        

        const persona1 = {
            clave: 'crack',
            nombre: 'santiago',
            edad: 18,
        }

        const expectedPerson = {
            nombreClave: 'crack', //ya que recibe como nombreClave a clave
            anios: 18,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const newPerson = usContext(persona1)

        expect(newPerson).toEqual(expectedPerson)
    });
});