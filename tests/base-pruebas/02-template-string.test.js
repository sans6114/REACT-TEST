import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Probe of the funcion "02-string"', () => {

    test('getSaludo debe retornar el nombre con su saludo', () => {


        const name = 'Santiago'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}` )

    })


});

