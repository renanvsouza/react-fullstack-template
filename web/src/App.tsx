import { Suspense } from 'react';
import './App.css';

interface ServerData {
  message: string;
}

async function fetchData(): Promise<ServerData> {
  const response = await fetch('/api/hello');
  const data = await response.json();
  return data;
}

function App() {
  const waitingData = (
    <h2 className="text-2xl text-gray-600 font-medium">
      Waiting for server...
    </h2>
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">
            Fullstack React App
          </span>
        </h1>
      </div>
      <Suspense fallback={waitingData}>
        <h2 className="text-2xl text-gray-600 font-medium">
          {fetchData().then((data) => data.message)}
        </h2>
      </Suspense>
    </div>
  );
}

export default App;
