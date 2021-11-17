import './App.css';
import Profile from './Profile/Profile';
function App() {
  const handlename =(fullName) => alert(`I'am ${fullName}`)
  return (
     <Profile fullName = "Yassine Chatti" Bio="Hi everybody !"
      profession="Student" handlename={handlename}>
       {<img src="logo192.png" alt="react logo" style={{width: "200px"}}></img>}
     </Profile>

  );
}

export default App;
