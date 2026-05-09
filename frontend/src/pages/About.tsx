import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">

      <ScrollReveal>
        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-gray-600">
I am a 16-year-old student based in Kenya with a strong interest in technology and creative digital work. I enjoy exploring web development and building ideas like websites, apps, and online platforms, especially those that can solve real problems or create opportunities for people. I am passionate about learning how the digital world works and how I can use it to build useful and meaningful projects.

I am also interested in freelancing and earning online, and I am actively developing my skills in frontend and backend development so I can become a full stack developer in the future. I enjoy experimenting with new tools, improving my coding abilities, and turning ideas into real working projects. Alongside coding, I have a creative side where I like designing logos, making advertisements, and thinking about UI/UX design to make my projects look professional and user-friendly.

My goal is to keep growing my skills, gain experience through real projects, and eventually build a strong career in technology where I can work on impactful digital solutions.
        </p>
      </ScrollReveal>

    </section>
  );
}