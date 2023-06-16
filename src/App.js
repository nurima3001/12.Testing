import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { PostContextProvider } from '../src/context/post-context';
import { LoginPage } from './pages/login-page/LoginPage';
import { HomePage}  from './pages/home-page/HomePage';
import { Counter } from './components/counter';
function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <Routes>
        <Route path= '/home' element={<HomePage/>} />
        <Route path= '/login' element={<LoginPage/>} />
        <Route path= '/counter' element={<Counter/>} />
        <Route path= '/' element={<LoginPage/>} />
        </Routes>
     </PostContextProvider>
    </div>
  );
}

export default App;
