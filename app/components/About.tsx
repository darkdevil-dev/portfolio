import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
            I&apos;m currently looking to join a{" "}
            <span className="text-purple-400">cross-functional team</span>
            <br />
            <span className="text-sm">
              that values building impactful products through{" "}
              <span className="text-purple-400">clean code & great user experience</span>
            </span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center text-sm">
          {[
            "React.js", "Node.js", "Express.js", "MongoDB",
            "Flutter", "Firebase", "Supabase", "MySQL",
            "Tailwind CSS", "Docker", "Git & GitHub", "Python",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-purple-300 font-medium hover:bg-purple-500/10 transition"
            >
              {skill}
            </div>
          ))}
        </div>

        <Image
          src="/assets/illustration.png"
          alt="Skills"
          width={800}
          height={800}
          className="object-cover mx-auto mt-16"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}