import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import Content from './components/Content.js';


function App() {
  return (
    <div className={css.App}>
      <Content />
      <Sidebar />
    </div>
  );
}

export default App;