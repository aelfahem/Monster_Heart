import { useEffect, useState } from "react";
import { getGreeting } from "./Components/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getGreeting()
      .then(data => setMessage(data.name))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Test connexion</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
