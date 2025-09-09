export default function NotFound() {
  return (
    <div className="grid min-h-dvh place-items-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-gray-400">Page not found</p>
        <a className="mt-4 inline-block rounded-md bg-white/10 px-4 py-2 hover:bg-white/20" href="/">Go home</a>
      </div>
    </div>
  );
}
