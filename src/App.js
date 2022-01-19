import './App.css';
import Benefits from './components/benefits/benefits';
import Header from './components/header';
import SectionFour from './components/section-four/section-four';
import SectionTwo from './components/section-two/section-two';
import Implementation from './components/implementation';
import SectionTen from "./components/section-ten/section-ten";
import SectionEleven from "./components/section-eleven/section-eleven";
import SectionSeven from "./components/section-seven/section-seven";

function App() {
    return (
        <>
            <Header />
            <SectionTwo />
            <Benefits />
            <SectionFour />
            <Implementation />
            <SectionSeven />
            <SectionTen />
            <SectionEleven />
        </>
    );
}

export default App;
