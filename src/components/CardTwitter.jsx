import { useState } from 'react';

export function CardTwitter({ children, username, user = 'nouser', avatar, initialUser }) {

const [userState, setUser] = useState(initialUser)
    const [isFollow, setIsFollow] = useState(false)


    const handleUser = () => {
        if(userState === 'por defecto'){
            setUser('cambie el por defecto')
        } else {
            setUser('por defecto')
        }
    }

    const handleClick = () => {
        setIsFollow(!isFollow)
    }
    //children es similar a slot
    //NUNCA USAR CHILDREN COMO PROP NORMAL
    // const addAt = (user) => `@${user}`
    const textBtn = isFollow ? 'siguiendo' : 'seguir'
     const btnClase = isFollow ? 'hover:bg-red-600 border border-red-800' : 'hover:bg-blue-500 border border-blue-500'
    return (
        <article className="bg-gray-800 text-white px-5 py-3 flex items-center justify-between">

            <header className="flex items-center">
                <img className="w-12 h-12 rounded-full" src={avatar} alt={`avatar de ${username}`} />
                <div className="flex flex-col px-2">
                    {
                        username ?
                            (
                                <strong className="font-bold">{username}</strong>
                            )
                            :
                            (
                                <strong className="font-bold">{children}</strong>
                            )
                    }
                    <span className="text-md">@{user}</span>
                    {
                        initialUser ? (
                        <div className='flex flex-col gap-y-1'>

                            <span className="text-md">{userState}</span>
                                <button onClick={handleUser} className='rounded-full bg-white text-black my-2'>change user 2</button>
                        </div>
                        
                        ) : null
                    }
                    
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={`px-4 py-1 rounded-full bg-white text-black font-bold ${btnClase}`}>
                    {textBtn}
                </button>
            </aside>
        </article>
    )
}