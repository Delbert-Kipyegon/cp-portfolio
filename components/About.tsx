import { Code, Briefcase, Coffee, Lightbulb, CheckCircle } from "lucide-react";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center justify-center px-4 py-16"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center font-raleway">
        About Me
      </h2>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          As a developer and business person, I bring a unique perspective to
          the world of technology. My genetic makeup includes:
        </p>
        <ul className="list-none space-y-4 ml-0">
          <li className="flex items-center">
            <Code className="text-secondary w-6 h-6 mr-3" />
            <span>50% Problem-solving DNA</span>
          </li>
          <li className="flex items-center">
            <Briefcase className="text-secondary w-6 h-6 mr-3" />
            <span>25% Entrepreneurial spirit</span>
          </li>
          <li className="flex items-center">
            <Coffee className="text-secondary w-6 h-6 mr-3" />
            <span>15% Coffee-powered coding</span>
          </li>
          <li className="flex items-center">
            <Lightbulb className="text-secondary w-6 h-6 mr-3" />
            <span>10% Innovative thinking</span>
          </li>
        </ul>
        <p>
          With a strong foundation in both technical and business domains, I
          strive to create solutions that not only work flawlessly but also
          drive business growth and user satisfaction.
        </p>
        <p>
          My journey in the tech world has been shaped by a passion for learning
          and a commitment to excellence. I believe in the power of technology
          to transform businesses and improve lives.
        </p>
        <div className="bg-blue-10 border-l-4 border-secondary p-4 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="text-secondary-light w-6 h-6 mr-3" />
            <p className="font-medium">
              I sell custom software to businesses and individuals, crafting
              tailored solutions that address unique needs and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
