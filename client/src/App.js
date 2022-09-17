import { Provider } from "react-redux";
import Navigation from "routes";
import store from "store";
function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
