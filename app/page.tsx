export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Inventory Management</h1>
        <p>
          Streamline your inventory tracking with our powerful, easy-to-use
          management system. Track products, monitor stock levels, and gain
          valuable insights
        </p>
        <div className="flex gap-2">
          <a
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font font-semibold hover:bg-purple-700"
            href=""
          >
            Sign in
          </a>
          <a
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font font-semibold border-purple-600 hover:bg-white/80 border-2"
            href=""
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
