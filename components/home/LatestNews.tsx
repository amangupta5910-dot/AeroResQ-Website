const news = [
  {
    category: "AI",
    title: "AI-Powered Search & Rescue",
    date: "July 2026",
  },
  {
    category: "Research",
    title: "Thermal Vision Innovation",
    date: "July 2026",
  },
  {
    category: "Startup",
    title: "Future of Autonomous Rescue",
    date: "July 2026",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#050816] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-orange-500">
            Latest News
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Research & Updates
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-orange-500 transition"
            >

              <div className="h-56 bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center text-gray-400">

                Image Placeholder

              </div>

              <div className="p-6">

                <span className="text-orange-500 text-sm">

                  {item.category}

                </span>

                <h3 className="text-2xl font-bold mt-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-4">

                  {item.date}

                </p>

                <button className="mt-6 text-orange-500">

                  Read More →

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}