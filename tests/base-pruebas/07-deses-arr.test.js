import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('test on my funtion 07-desdes-arr', () => {
    

    test('funtion retorna arreglo tiene que devolver un arreglo con clave,valor', () => {
        

        const [letters, numbers] = retornaArreglo()

        console.log(letters)
        console.log(numbers)

        expect(letters).toBe('ABC')
        //tobe evalua el tipo de dato también
        expect(numbers).toBe(123)
    });
});

