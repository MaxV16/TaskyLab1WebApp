import './App.css';
import Tasks from './components/Tasks';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
            <Tasks title="Dishes" deadline="Today"/>
            <Tasks title="Laundry" deadline="Tomorrow">
            Fold Laundry and put away
            </Tasks>
            <Tasks title="Tidy" deadline="Today"/>

    </div>
  );
}


export default App;