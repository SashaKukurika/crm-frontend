import { FC } from 'react';
import {Orders} from "../components/Orders/Orders";

interface IProps {

}

const OrderPage: FC<IProps> = () => {
 return (
  <div>
   <Orders/>
  </div>
 );
};

export {OrderPage};