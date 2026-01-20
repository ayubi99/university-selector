export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">UniGuide</h2>
        <p className="text-gray-400 mb-6">
          Helping students explore universities and compare programs in KPK.
        </p>

        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Universities</a>
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} UniGuide. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
