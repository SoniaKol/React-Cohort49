import { useWindowSize } from "./components/useWindowSize";
import WindowSize from "./components/WindowSize";
import Avatar from "./components/Avatar";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div className="App">
      <h1>Check Screen Size</h1>
      <WindowSize width={width} height={height} />
      <Avatar />
    </div>
  );
}

export default App;
