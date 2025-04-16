import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const interest = [
    "learn coding",
    "javascript",
    "food",
    "entertainment",
    "sports",
  ];

  const hobbies = ["Badminton", "Basketball", "C-drama", "Video Games", "Travel"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              First name: Denzel, Last Name: Sadino. I'm 20 years old born in Bauko Mountain Province,
               and currently living at upper Pinget Baguio city
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Interest</h3>
                <div className="flex flex-wrap gap-2">
                  {interest.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 skills </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Good Communication </strong>
                </li>
                <li>
                  <strong>Multi Tasking</strong> 
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 More About Me </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Born in (2004 - October 26){" "}
                  </h4>
                  <p>
                    My MBTI personaity is (ISTP) My Zodiac sign is Scorpio
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Second year college at University of Cordillera{" "}
                  </h4>
                  <p>
                    Willing to learn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
    </section>
  );
};
