export function CardTwitter ({username, user, avatar}) {

return (
    <article className="bg-gray-800 text-white px-5 py-3 flex items-center justify-between">

    <header className="flex items-center">
        <img className="w-14 rounded-full" src={`https://img.daisyui.com/images/${avatar}`} alt={`avatar de ${username}`} />
        <div className="flex flex-col px-2">
            <strong className="font-bold">{username}</strong>
            <span className="text-md">{user}</span>
        </div>
    </header>
    <aside>
        <button className="bg-white text-black px-4 py-1 rounded-full">Seguir</button>
    </aside>
</article>
)
}