const Login = () => {
  return (
    <div className="w-96 mx-auto mt-20 py-12 px-8 bg-orange-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Email" />
        <input className="border p-2 rounded" placeholder="Password" type="password" />
        <button className="bg-orange-600 text-white px-4 py-2 rounded">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
