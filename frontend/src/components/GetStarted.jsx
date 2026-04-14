import { Link } from "react-router-dom";
import styles from "../style";

const GetStarted = () => {
  return (
    <section id="prediction" className="py-32 text-center">

      <h2 className="text-4xl font-bold mb-6">
   <span className="text-gradient">Get Started</span>
</h2>
      

      <p className="text-gray-300 mb-8">
        Try our AI-powered fake news detection tool.
      </p>
      <p className="text-gray-300 mb-8 max-w-[470px] mx-auto text-center">
  Instantly analyze news articles in multiple languages and find out whether they are real or fake using machine learning.
</p>
      

      <Link to="/prediction">
        <button className="bg-blue-600 px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Try Prediction
        </button>
      </Link>

    </section>
  );
};

export default GetStarted;