import { Link } from 'react-router-dom';
import './erro.css';

const Error = () => {
  return (
    <div className='container-error'>
        <h1>Pagina não encontrada!</h1>
        <Link to="/">
            Voltar para home
        </Link>
    </div>
  )
}

export default Error;
