const About = () => {
  return (
    <section id="about" className="py-32 px-6">

  <div className="flex md:flex-row flex-col items-center justify-center gap-10">

    {/* LEFT SIDE → IMAGE */}
    <div className="flex-1 flex justify-center">
      <img
        src="/about.png"   // 👈 put your image in public folder
        alt="about"
        className="w-[80%] max-w-[400px] rounded-lg shadow-lg"
      />
    </div>

    {/* RIGHT SIDE → TEXT */}
    <div className="flex-1 text-center md:text-left">

      <h2 className="text-4xl font-bold mb-6">
        <span className="text-gradient">About Us</span>
      </h2>

      <p className="max-w-xl text-gray-300 mb-4">
        This Fake News Detection system uses Machine Learning and NLP
        to identify whether a news article is real or fake. It helps
        users make informed decisions and avoid misinformation.
      </p>

      <p className="max-w-xl text-gray-300 leading-relaxed">
        This Fake News Detection project was developed by Avni Vashist, Radha Singh, and Aalima Khan using Machine Learning and Natural Language Processing. It analyzes news content to identify misinformation and promote digital awareness. Our goal is to provide a simple, reliable tool that helps users make informed decisions in today’s fast-paced online world.
      </p>

    </div>

  </div>

</section>
  );
};

export default About;