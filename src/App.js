import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./component/Cards";
import SortDropdown from "./SortDropdown";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [selectedSort, setSelectedSort] = useState('stars');
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${input}`
      );
      setItem(res.data.items);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(()=>{
    handleSearch();
  },[])


const sortData = (sortOption) => {
  setSelectedSort(sortOption);
  const sortedData = [...item].sort((a, b) => {
    switch (sortOption) {
      case 'stars':
        return b.stargazers_count - a.stargazers_count;
      case 'watchers':
        return b.watchers_count - a.watchers_count;
      case 'score':
        return b.score - a.score;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'created':
        return new Date(b.created_at) - new Date(a.created_at);
      case 'updated':
        return new Date(b.updated_at) - new Date(a.updated_at);
      default:
        return 0;
    }
  });
  setItem(sortedData);
};
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
        <SortDropdown selectedSort={selectedSort} onSortChange={sortData}/>
        
      </div>
      <div className="container mt-3">
      <div className="row d-flex justify-content-center align-items-center " >
        {item.map((ele)=><Cards ele={ele}/>)}</div>
        </div>
    </>
  );
}

export default App;
