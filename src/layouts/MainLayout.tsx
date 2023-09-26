import {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

interface IProps {

}

const MainLayout: FC<IProps> = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};