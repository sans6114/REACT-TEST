import {
  useEffect,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import { Button } from './Button';

const CounterApp = ({ value, title }) => {
    const [counter, setCounter] = useState(value)
    useEffect(() => {
        console.log('useeffect!')
    }, [counter])

    const incrementFunction = () => {
        setCounter(counter + 1)
    }

    const decrementFunction = () => {
        if (counter > 0) {
            // setCounter(counter - 1)
            setCounter((c) => c - 1)
        }
    }


    const resetFunction = () => {
        setCounter(value)
    }

    return (
        <section className='h-screen flex flex-col items-center'>
            <h2 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white text-center mt-10'>{title}</h2>
            <h2 className='font-extrabold text-8xl'> {counter} </h2>
            <div className='flex justify-between w-full mt-10'>
                <Button btnText={'Increment'} onClick={incrementFunction} />
                <Button btnText={'Reset'} onClick={resetFunction} />
                <Button btnText={'Decrement'} onClick={decrementFunction} />
            </div>
        </section>
    )
}

export default CounterApp

CounterApp.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number.isRequired,
};