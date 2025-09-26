import './App.css';
import Tasks from './components/Tasks';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
            <Tasks title="Dishes" deadline="Today" description="Wash all the dishes and put them away."/>
            <Tasks title="Laundry" deadline="Tomorrow" description="Fold laundry and put it away."/>
            <Tasks title="Tidy" deadline="Today" description="Tidy up the living room and kitchen."/>

    </div>
  );
}


export default App;