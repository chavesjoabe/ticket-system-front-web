import { useContext } from 'react';
import { AuthContext } from '../components/context/auth.context';

const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};

export default useAuth;
