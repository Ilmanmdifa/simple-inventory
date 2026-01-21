import SideBar from "./components/sidebar";

export default function Loading() {
  // Stack uses React Suspense, which will render this page while user data is being fetched.
  // See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
  return (
    <>
      <SideBar currentPath="/" />
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-purple-500"></div>
      </div>
    </>
  );
}
