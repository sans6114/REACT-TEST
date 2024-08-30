import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('test on 09-promesas function', () => {


    test('function debe retornar heroe luego de 2s', (done) => {

        const id = 1
        getHeroeByIdAsync(id).then(hero => {


            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done()
        })
    });

    test('function debe retornar un error si heroe no existe', (done) => {

        const id = 100
        //const id = 1
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy()
            done()
        })
        .catch(error => {

            expect(error).toBe('No se pudo encontrar el héroe')
            done()
        })
    });
});