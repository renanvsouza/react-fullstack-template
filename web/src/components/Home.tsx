import { useQuery } from '@tanstack/react-query';

const fetchApiData = async () => {
  const response = await fetch('/api/hello');
  if (!response.ok) throw new Error('Error fetching data');
  return response.json();
};

function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['apiData'],
    queryFn: fetchApiData,
  });

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-green-500 text-transparent bg-clip-text">
            Fullstack React App
          </span>
        </h1>
      </div>
      {isPending ? (
        <h2 className="text-2xl text-gray-600 font-medium">Loading...</h2>
      ) : isError ? (
        <h2 className="text-2xl text-gray-600 font-medium">
          Error: {error.message}
        </h2>
      ) : (
        <h2 className="text-2xl text-gray-600 font-medium">{data.message}</h2>
      )}
    </div>
  );
}

export default Home;
