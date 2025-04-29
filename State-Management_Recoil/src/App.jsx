import { RecoilRoot } from 'recoil';
import './App.css'
import Count from './components/Count'

function App() {
  console.log("App component is re-rendered....");
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

export default App;