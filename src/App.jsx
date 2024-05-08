import './App.css';
import CreateBook from './Components/CreateBook.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewTasks from './Components/ViewTasks.jsx';
import StartingPage from './Components/StartingPage.jsx';
import UpdateTask from './Components/UpdateTask.jsx';
import AuthPage from './Components/AuthPage.jsx';
import LoginPage from './Components/LoginPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/register' element={<AuthPage/>}/>
        <Route exact path='/firstPage' element={<StartingPage/>}/>
        <Route exact path='/addTask' element={<CreateBook/>}/>
        <Route exact path='/viewTasks' element={<ViewTasks/>}/>
        <Route exact path='/updateTask/:bid' element={<UpdateTask/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
