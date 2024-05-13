import 'normalize.css';
import './index.css';

import Header from './components/Header/Header';
import WrapperTasks from './components/WrapperTasks/WrapperTasks';
import Footer from './components/Footer/Footer';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function App() {
  return (
    <>
      <Header />
      <WrapperTasks />
      <Footer />
    </>
  )
}

export default App;
