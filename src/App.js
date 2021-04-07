import Logo from './components/Logo';
import CallToAction from './components/CallToAction';
import Search from './components/Search';
import Button from './components/Button';

function App() {
  return (
    <div className={'bg-gray-800 h-screen container overflow-hidden flex items-center justify-center flex-col w-full'}>
      <Logo/>
      <Search/>
      <Button>Hello there</Button>
      <CallToAction/>
    </div>
  );
}

export default App;
