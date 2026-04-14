const Feedback = () => {
  return (
    <section id="feedback" className="py-32 px-6 text-center">

      <h2 className="text-4xl font-bold mb-6">
        <span className="text-gradient">Feedback</span>
      </h2>

      <textarea
        placeholder="Write your feedback..."
        className="w-full max-w-xl p-4 rounded-lg text-black"
      />

      <br />

      <button className="mt-4 bg-blue-500 px-6 py-2 rounded-lg">
        Submit
      </button>

    </section>
  );
};

export default Feedback;