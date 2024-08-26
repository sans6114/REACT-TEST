export const Square = ({ children, isSelected, updateBoard, index, }) => {
    const handleClick = () => {
        updateBoard(index)
    }

    const selected = `flex items-center justify-center h-24 w-24 border border-gray-300 text-2xl font-bold bg-white text-black rounded-3xl cursor-pointer ${isSelected ? 'isSelected' : ''}`
    return (
        <div onClick={handleClick} className={selected}>
            {children}
        </div>
    )
}