import { Routes, Route } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import Home from './page/home';
import User from './page/user';

function App() {
  return (
    <FormProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:horoscope" element={<User />} />
      </Routes>
    </FormProvider>
  );
}

export default App;
