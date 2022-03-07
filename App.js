import { PieChart } from 'react-minimal-pie-chart';

import './App.css';

function App() {
  return (
    <div className="app">
    <PieChart
    data={[
      { title: 'One', value: 10, color: '#E38627' },
      { title: 'Two', value: 15, color: '#C13C37' },
     
    ]} lineWidth ="15" paddingAngle="4"
  />
    </div>
  );
}

export default App;
