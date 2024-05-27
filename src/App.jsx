import "./App.css";
import Body from "./Components/body";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { ToastContextProvider } from "./Components/context/ToastContext";

const App = () => {
  return (
    <ToastContextProvider>
      <Header />
      <Body />
      <Footer />
    </ToastContextProvider>
  );
};

export default App;
