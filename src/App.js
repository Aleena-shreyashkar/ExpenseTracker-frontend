import styled from "styled-components";
import bg from "./img/bg.png";
import Orb from "./components/Orb/Orb";
import { Mainlayout } from "./styles/layout";
import Navigation from "./components/Navigation/Navigation";
import React, { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from "./context/globalContext";
import Transaction from "./components/Transactions/Transaction";

function App() {
    const [active, setActive] = useState(1);

    const Global = useGlobalContext();
    console.log(Global);

    const orbMemo = useMemo(() => {
        return <Orb />;
    }, []);

    const displayData = () => {
        switch (active) {
            case 1:
                return <Dashboard />;
            case 2:
                return <Transaction />;
            case 3:
                return <Income />;
            case 4:
                return <Expenses />;
            default:
                return <Dashboard />;
        }
    };
    return (
        <AppStyled bg={bg} className="App">
            {orbMemo}
            <Mainlayout>
                <Navigation active={active} setActive={setActive} />
                <main>{displayData()}</main>
            </Mainlayout>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${(props) => props.bg});
    position: relative;
    main {
        flex: 1;
        background: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow-x: hidden;
        &::-webkit-scrollbar {
            width: 0;
        }
    }
`;

export default App;
