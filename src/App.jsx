import './App.css';

function App() {
  return (
    <div className="p-10 space-y-4">
      <div className="bg-red-500 text-white p-4 rounded">Red Box</div>

      <div className="bg-[#123456] text-white p-4 rounded">Custom Color (JIT Test)</div>

      <div className="text-sm md:text-3xl">Resize screen (Responsive Test)</div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
        Hover Me
      </button>
    </div>
  );
}

export default App;
