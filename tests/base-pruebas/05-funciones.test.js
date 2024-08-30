import {
  getUser,
  getUsuarioActivo,
} from '../../src/base-pruebas/05-funciones';

describe('pruebas en 05-funciones', () => {


    test('getUser tiene que sevolver un UUID y username especifico en objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()


        expect(testUser).toEqual(user)
    });


    test('getUsuarioActivo debe retornar uid y un username', () => {

        const nombre = 'santiago'


        const activeUser = {
            uid: 'ABC567',
            username: nombre
        }


        const getActive = getUsuarioActivo(nombre)

        expect(getActive).toEqual(activeUser)
    });
});


