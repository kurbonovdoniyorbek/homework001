import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CommentPage from './components/CommentPage';

function App() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let informations = await axios.get("https://jsonplaceholder.typicode.com/comments")
      setComments(informations.data)
    }
    fetchData()
  })
  return (
    <div className="App">
      <CommentPage commoncoments={comments} />
    </div>
  );
}

export default App;
