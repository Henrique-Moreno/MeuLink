import { useState } from 'react';
import {FiLink} from 'react-icons/fi';
import LinkItem from '../../components/LinkItem';
import Menu from '../../components/Menu';
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

import './home.css';

const Home = () => {

  const [ link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setshowModal] = useState(false);

  async function handleShorLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setshowModal(true);
      saveLink('@encurtaLink', response.data)
      setLink('');

    }catch {
      alert('Ops parece que algo deu errado');
      setLink('');
    }
  }
  
  return (
    <div className='container-home'>

      <div className='logo'>
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className='area-input'>
        <div>
          <FiLink size={24} color="#FFF"/>
          <input 
            type="text"
            placeholder='Cole seu link aqui...' 
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShorLink}>Encurtar Link</button>

      </div>

      <Menu />

      { showModal && (
        <LinkItem closeModal={() => setshowModal(false)} content={data}/>
      )}

    </div>
  )
}

export default Home;