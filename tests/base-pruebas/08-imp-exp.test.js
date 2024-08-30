import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('test 08-imp-exp', () => {


    test('function getHeroeById debe retornar un heroe a partir del argumento pasado', () => {

        const id = 1
        const hero = getHeroeById(id)


        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });
    test('function getHeroeById debe retornar undefined si no encuentra el id', () => {

        const id = 100
        const hero = getHeroeById(id)

        expect(hero).toBeFalsy()
    });

    //tarea 
    test('getHeroByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC'

        const heroesByOwner = getHeroesByOwner(owner)


        expect(heroesByOwner.length).toBe(3)

        expect(heroesByOwner).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
    });

    test('getHeroByOwner debe retornar un arreglo con los heroes de Marvel', () => {


        const owner = 'Marvel'

        const heroesByOwner = getHeroesByOwner(owner)

        expect(heroesByOwner.length).toBe(2)
        expect(heroesByOwner).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])

    });
});