import './App.css';
import SearchBox from './components/searchBox/SearchBox';
import ListHistory from './components/listHistory/ListHistory';
import ListResults from './components/listResults/ListResults';
import NextPage from './components/nextPage/NextPage';
const App = () => {
  return (
    <div className="App">
      <SearchBox />
      <ListHistory />
      <ListResults />
      <NextPage />
    </div>
  );
};
export default App;
