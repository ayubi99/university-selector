export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-6 text-slate-900">
        Contact Us
      </h1>

      <p className="text-gray-700 text-center mb-10">
        Have questions or feedback? Reach out to us using the form below.
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold"
        >
          Send Message
        </button>
      </form>

      <p className="text-center text-gray-500 mt-6 text-sm">
        Note: This is a demo form; backend integration will be done later.
      </p>
    </div>
  );
}
