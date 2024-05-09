import WrapperTasks from './components/WrapperTasks/WrapperTasks';
import 'normalize.css';
import './index.css';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  return (
    <WrapperTasks />
  )
}

export default App;
