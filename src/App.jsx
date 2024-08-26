import { useState } from 'react';

import confetti from 'canvas-confetti';

import { Button } from './components/Button';
import { Square } from './components/Square';
import TitleH2 from './components/TitleH2';
import {
  TURNOS,
  WINNER_COMBOS,
} from './constants';

function App() {
    //ESTADO PARA ARMAR MI BOARD GAME
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })
    //ESTADO PARA MIS TURNOS
    const [turnos, setTurnos] = useState(() => {
        const turnosFromStorage = window.localStorage.getItem('turno')
        return turnosFromStorage ? JSON.parse(turnosFromStorage) : TURNOS.X
    })
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

        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turnos')
    }
    const checkEndGame = (newBoard) => {
        return newBoard.every((square) => square !== null)
    }
    const updateBoard = (index) => {
        // if(board[index] !== null) return (MI OPCION)
        //si ya tiene 'x' o 'o' pasar a siguiente turno 
        if (board[index] || winner) return
        //actualizo el board con el valor actual del indiice, 'x' o 'o
        const newBoard = [...board]
        newBoard[index] = turnos // 'x' u 'o'
        setBoard(newBoard)
        const newTurno = turnos === TURNOS.X ? TURNOS.O : TURNOS.X
        setTurnos(newTurno)
        //hacer guardado de partida en localstorage
        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turno', JSON.stringify(newTurno))
        //revisar si ya gano algun jugador
        const newWinner = checkWinner(newBoard)

        if (newWinner) {
            // alert(`gano ${newWinner}`)
            confetti()
            setWinner(newWinner) // si esto fuera SINCRONO QUE NO LO ES
        } else if (checkEndGame(newBoard)) {
            setWinner(false) //empate
        }
        // CHECK WINNER

    }

    return (
        <main className="min-h-screen max-w-3xl mx-auto flex flex-col items-center justify-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mt-10">Tic Tac Toe</h1>
            {
                winner !== null ? (
                    <div className='absolute bg-cyan-200 w-full h-full flex flex-col items-center justify-center'>
                        <TitleH2 textSubtitle={`${winner} have more luck!`}>
                            {winner === false ? 'Empate' : 'Gano ' + winner}
                        </TitleH2>

                        <Button btnText={'Empezar de nuevo'} resetGame={resetGame} />
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
            <section className="grid grid-cols-3 gap-4 mx-auto bg-cyan-200 p-5 rounded-3xl my-10 border-2  shadow-2xl">
                {
                    board.map((squareItem, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {squareItem}
                            </Square>
                        )
                    })
                }

            </section>
            <Button btnText={'Reset de partida'} resetGame={resetGame} />




        </main>
    )

}
export default App