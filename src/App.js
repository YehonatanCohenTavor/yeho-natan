import './App.css';
import UserPage from './components/UserPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';



function App() {
  return (
    <Routes>
      <Route path='user'>
        <Route index element={<UserPage />} />
        <Route path='info'></Route>
        <Route path='todos'></Route>
        <Route path='posts'></Route>
        <Route path='albums'></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Route>
    </Routes>

  )
}

export default App;
