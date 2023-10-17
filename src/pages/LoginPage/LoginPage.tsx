import { FC } from 'react';

import { LoginForm } from '../../components';

import './LoginPage.css';

const LoginPage: FC = () => {
  // authService.deleteTokens();
  return (
    <div className={'Login_page'}>
      <LoginForm />
    </div>
  );
};

export { LoginPage };
