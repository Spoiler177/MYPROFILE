export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <form className="max-w-xl mx-auto space-y-4">
        <input className="w-full p-3 border rounded" placeholder="Name" />
        <input className="w-full p-3 border rounded" placeholder="Email" />
        <textarea className="w-full p-3 border rounded" placeholder="Message" />
        <button className="bg-indigo-600 text-white px-6 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  );
}