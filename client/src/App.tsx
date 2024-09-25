import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface Info {
  name: string;
  age: number;
  hobby: string;
}
function App() {
  const [info, setInfo] = useState<Info | null>(null);
  const fetchApi = async () => {
    const response = await axios.get('http://localhost:8080/api');
    setInfo(response.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className='container'>
      <img src='../src/assets/avatar.png' alt='Avatar img' />

      {info && (
        <ul>
          <li>Name:{info.name}</li>
          <li>Age:{info.age}</li>
          <li>Hobbies:{info.hobby}</li>
        </ul>
      )}
    </div>
  );
}

export default App;
