import { useState } from 'react';

import { CardTwitter } from './components/CardTwitter';
import avatar1 from './images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg';
import avatar2 from './images/foto-sushi-6anudmpILw4-unsplash.jpg';
import avatar3 from './images/jurica-koletic-7YVZYZeITc8-unsplash.jpg';
import avatar4 from './images/michael-dam-mEZ3PoFGs_k-unsplash.jpg';

export function App() {

const [theName, setName] = useState('santiago')
const initValueUser = 'por defecto'

const handleClick = () => {
    if(theName === 'santiago'){
        setName('Juan Martin')
    } else {
        setName('santiago')
    }
}

    const card3 = {
        isfollowing: true,
        user: "user",
        avatar: avatar3,
        children: "Juan Pablo Sosa",
    };
    const card4 = {
        isfollowing: false,
        username: "Natalia Spetale",
        user: 'hola',
        avatar: avatar4,
    };
    

    return (
        
        <section className='flex flex-col'>

            <CardTwitter  initialUser={initValueUser}  user="user" avatar={avatar1} >
                Santiago Sosa
            </CardTwitter>

            <CardTwitter initialUser={initValueUser}  username={theName}  avatar={avatar2} />

            <CardTwitter {...card3} />

            <CardTwitter {...card4} />
        <button onClick={handleClick} className='self-center p-3 bg-blue-500 text-white rounded-full my-3 font-extrabold hover:bg-blue-800'>Cambiar nombre avatar 2</button>
        </section>
        
        
    )


}

// como agrego una funcion a mi children:
// const conArroba = (name) => `@${name}`
// return (
//     <section>
//         <CardTwitter
//         formatter={conArroba}
//         isfollowing={true} username="Santiago Sosa" user="user" avatar={avatar1} />

//         <CardTwitter
//         formatter={conArroba}
//         isfollowing={false} username="Juan Martin Sosa" user="user2" avatar={avatar2} />

//         <CardTwitter
//         formatter={conArroba}
//         isfollowing={false} username="Natalia Spetale" user="user3" avatar={avatar3} />

//         <CardTwitter
//         formatter={conArroba}
//         isfollowing={true} username="Juan Pablo Sosa" user="user4" avatar={avatar4} />
//     </section>
// )