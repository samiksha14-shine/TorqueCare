export default function ContactForm() {
  return (
    <section id="contact" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-semibold">Request a free inspection</h2>
        <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <input className="rounded-md border border-white/10 bg-zinc-900 p-3 outline-none" placeholder="Name" />
          <input className="rounded-md border border-white/10 bg-zinc-900 p-3 outline-none" placeholder="Phone" />
          <input className="md:col-span-2 rounded-md border border-white/10 bg-zinc-900 p-3 outline-none" placeholder="Car model" />
          <textarea className="md:col-span-2 h-28 rounded-md border border-white/10 bg-zinc-900 p-3 outline-none" placeholder="Describe the issue" />
          <button className="md:col-span-2 rounded-md bg-red-600 px-5 py-3 font-medium hover:bg-red-500">Submit</button>
        </form>
      </div>
    </section>
  );
}
