import { Hero, Sales } from './components';
import { heroapi, popularsales, toprateslaes } from './data/data.js';

const App = () => {
    return (
        <>
            <main className="relative flex flex-col gap-16">
                <Hero heroapi={heroapi} />
                <Sales endpoint={popularsales} />
                <Sales endpoint={toprateslaes} />
            </main>
        </>
    );
};

export default App;
