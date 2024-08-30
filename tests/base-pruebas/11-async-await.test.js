import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('test on 11-async-await', () => {



    test('function should give me a gift after 1000ms', async () => {


        const url = await getImagen()
        console.log(url)

        expect(typeof url).toBe('string')
    });
});

