import './App.css';
import SearchBox from './components/searchBox/SearchBox';
import ListHistory from './components/listHistory/ListHistory';
import ListResults from './components/listResults/ListResults';
const App = () => {
  return (
    <div className="App">
      <SearchBox />
      <ListHistory />
      <ListResults />
    </div>
  );
};
export default App;
