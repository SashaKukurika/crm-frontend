import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { LoginForm } from '../../components';
import { authService } from '../../services';

import './LoginPage.css';

const LoginPage: FC = () => {
  authService.deleteTokens();
  const [query] = useSearchParams();
  return (
    <div className={'Login_page'}>
      {query.get('expSession') && <p>Session expired... please login again.</p>}
      <LoginForm />
    </div>
  );
};

export { LoginPage };
