export default function Contact() {
  return (
    <section id="contact">
      <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-4 text-slate-900">
        Contact Us
      </h1>

      <p className="text-gray-700 text-center mb-10">
        For inquiries, feedback, or support, please contact us using the form below
        or through our official communication channels.
      </p>

      {/* Contact Information */}
      <div className="bg-slate-50 border rounded-lg p-6 mb-10 text-sm text-gray-700">
        <p className="mb-2">
          <span className="font-semibold">📞 Phone:</span> 0334-5525242
        </p>
        <p className="mb-2">
          <span className="font-semibold">💬 WhatsApp:</span> 0308-8130852
        </p>
        <p>
          <span className="font-semibold">📧 Email:</span>{" "}
          <a
            href="mailto:uniguidekpk@gmail.com"
            className="text-blue-600 hover:underline"
          >
            uniguidekpk@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
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
        This contact form is currently for demonstration purposes. Backend
        integration will be implemented in future development phases.
      </p>
    </div>
    </section>
  );
}
