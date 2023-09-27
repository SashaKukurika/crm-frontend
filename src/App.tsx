import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {LoginPage} from "./pages/LoginPage";
import {OrdersPage} from "./pages/OrdersPage/OrdersPage";
import {Page404} from "./pages/Page404/Page404";

const App = () => {
    return (
        <Routes>
           <Route path={'/'} element={<MainLayout/>}>
               <Route index element={<Navigate to={'/login'}/>}/>
               {/*// path це що пишеться в урлі і при виклику link to там прописуємо одну з наших path і при кліку на лінк будемо переходити до element*/}
               <Route path={'/login'} element={<LoginPage/>}/>
               <Route path={'/orders'} element={<OrdersPage/>}/>

               <Route path="*" element={<Page404/>}/>
           </Route>
        </Routes>
    );
};

export default App;