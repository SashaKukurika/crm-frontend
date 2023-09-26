import {useState} from "react";
import {PageEnum} from "./constants/page.enum";
import {UserPage} from "./pages/UserPage";
import {LoginPage} from "./pages/LoginPage";
import {OrderPage} from "./pages/OrderPage";
import {Header} from "./components/Header/Header";
import {Routes} from "react-router-dom";

const App = () => {
    const [choice, setChoice] = useState<PageEnum>(PageEnum.LOGIN);
    return (
        <Routes>
            <Header setChoice={setChoice}/>
            {choice === PageEnum.LOGIN && <LoginPage/>}
            {choice === PageEnum.ORDERS && <OrderPage/>}
            {choice === PageEnum.USERS && <UserPage/>}
        </Routes>
    );
};

export default App;