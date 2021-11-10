import "./App.css";
import List from "./components/List/list";
import SearchBar from "./components/SearchBar/searchBar";
import MusicPlayer from "./components/MusicPlayer/musicPlayer";
// import Login from "./Pages/Login/login";

// import "bootstrap/dist/css/bootstrap.min.css";
// import Background from "./Pages/Background/background";

// const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">
      <div className="bg-background">
        <SearchBar />
        <List />
        <MusicPlayer />
      </div>
      {/* <h1 className="the_odd"></h1> */}

      {/* <Login /> */}
    </div>
  );
}

export default App;
