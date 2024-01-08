import { Frame } from "./components/frame";
import { Layout } from "./components/layout";
import "./index.css";

function App() {
  return (
    <div className="w-screen h-screen m-auto flex items-center justify-center">
      <Layout>
        <Frame />
      </Layout>
    </div>
  );
}

export default App;
