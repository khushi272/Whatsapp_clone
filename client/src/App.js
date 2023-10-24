
import "./App.css";
import Messanger from "./componets/Messanger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountPrpvider from "./context/AccountPrpvider";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="183610276881-8povouk0c2eiuu91vqnfvb16d2d7147k.apps.googleusercontent.com">
        <AccountPrpvider>
          <Provider store={store}>
          <Messanger />
          </Provider>
        </AccountPrpvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
