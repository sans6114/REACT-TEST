import CounterApp from './components/CounterApp';
import Titles from './components/Titles';

function App() {


    return (
        <main className="min-h-screen max-w-3xl mx-auto flex flex-col items-center justify-center">
            <Titles>REACT COURSE - FUNTIONAL COMPONENTS</Titles>
            <CounterApp value={10} title={'Counter component'}/>
            {/* <FirstApp title={'nueva app'} subTitle={'hola subtitle'} name={'hola'}/> */}
        </main>
    )

}
export default App