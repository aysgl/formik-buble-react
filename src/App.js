import { FormProvider } from './context/FormContext';
import FormikBubble from './page/FormikBubble';

function App() {
  return (
    <FormProvider>
      <FormikBubble />
    </FormProvider>
  );
}

export default App;
