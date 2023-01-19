
import './App.css';
import AdminRoutes from './Routes/AdminRoutes';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <MainRoutes/>
      <AdminRoutes/>
    </div>
  );
}

export default App;
