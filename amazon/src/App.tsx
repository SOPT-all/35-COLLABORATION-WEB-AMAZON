import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";


function App() {
  return (
    <>
      <h1>Amazon</h1>
      <p className="read-the-docs">웨비들 화이팅🌊</p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
