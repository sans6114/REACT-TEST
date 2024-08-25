import { useState } from 'react';

const TURNOS = {
    X: 'x',
    O: 'o'
}

const WINNER_COMBOS = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila del medio
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna central
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal
    [2, 4, 6]  // Diagonal secundaria
]


const Button = ({btnText, resetGame}) => {

const handleClick = () => {
    resetGame()
}

    return (
        <button onClick={handleClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{btnText}</button>
    )
}
const TitleH2 = ({ children, textSubtitle, btnText }) => {

    return (
        <div className="flex flex-col gap-y-2 text-center">
            <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                {children}
            </h2>
            {
                textSubtitle && (<p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    {textSubtitle}
                </p>)
            }
            {
                btnText && (<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">)
                    {btnText}
                </a>)
            }
        </div>
    )
}

const Square = ({ children, isSelected, updateBoard, index, }) => {


    const handleClick = () => {
        updateBoard(index)
    }

    const selected = `${isSelected ? 'bg-blue-500 text-white' : ''}`
    return (
        <div onClick={handleClick} className={`flex items-center justify-center h-24 w-24 border border-gray-300 text-2xl font-bold bg-white rounded-3xl cursor-pointer ${selected}`}>
            {children}
        </div>
    )
}


function App() {
    //ESTADO PARA ARMAR MI BOARD GAME
    const [board, setBoard] = useState(Array(9).fill(null))
    //ESTADO PARA MIS TURNOS
    const [turnos, setTurnos] = useState(TURNOS.X)
    //ESTADO PARA SABER EN QUE MOMENTO ESTA EL JUEGO, ¿GANÓ ALGUIEN ?
    const [winner, setWinner] = useState(null)
    //null = no hay ganador ni perdedor, false es que hubo empate
    const checkWinner = (boardToCheck) => {

        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo
            if (boardToCheck[a] && // o -> x u o
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]
            ) {
                return boardToCheck[a] //'x' o 'o'
            }
        }
        return null
    }
    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurnos(TURNOS.X)
        setWinner(null)
    }
    const updateBoard = (index) => {
        // if(board[index] !== null) return (MI OPCION)
        //si ya tiene 'x' o 'o' pasar a siguiente turno 
        if (board[index] || winner ) return
        //actualizo el board con el valor actual del indiice, 'x' o 'o
        const newBoard = [...board]
        newBoard[index] = turnos // 'x' u 'o'
        setBoard(newBoard)
        const newTurno = turnos === TURNOS.X ? TURNOS.O : TURNOS.X
        setTurnos(newTurno)
        //revisar si ya gano algun jugador
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            // alert(`gano ${newWinner}`)
            setWinner(newWinner) // si esto fuera SINCRONO QUE NO LO ES
        } 
        // CHECK WINNER
    }

    return (
        <main className="bg-gray-600 bg-opacity-25 min-h-screen max-w-3xl mx-auto flex flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">Tic Tac Toe</h1>
            <section className="grid grid-cols-3 gap-4 mx-auto bg-red-500 p-5 rounded-3xl mt-10">
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            
            {
                winner ? (
                    <div className='absolute bg-cyan-200 w-full h-full flex flex-col items-center justify-center'>
                        <TitleH2 textSubtitle={`${winner} have more luck!`}>
                            {
                                winner === false
                                ? 'Empate'
                                : 'gano ' + winner
                            }
                        </TitleH2>
                        <Button btnText={'Empezar de nuevo'} resetGame={resetGame}/>
                    </div>
                ) 
                :
                (
                    <section className='bg-cyan-200 px-12 py-10 my-5 rounded-2xl flex flex-col mt-10 mx-4'>
                    <TitleH2 textSubtitle={'This part of the table is for see what turn is the selected'}>Turn of ?</TitleH2>
                    <div className='flex justify-center items-center gap-x-10'>
                        <Square isSelected={turnos === TURNOS.X}>
                            {TURNOS.X}
                        </Square>
                        <Square isSelected={turnos === TURNOS.O}>
                            {TURNOS.O}
                        </Square>
                    </div>
                </section>
                )
            }


        </main>
    )

}
export default App