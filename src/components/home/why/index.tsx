const Why = () => {
  return (
    <section className="flex flex-col p-20 px-28 bg-gray-200">
      <div className="title flex justify-between mb-10">
        <h1 className="text-4xl font-bold mt-2">Why Choose ProChain? </h1>
        <p className="w-1/2 text-end">
          Experience our unmatched expertise and dedication to delivering
          exceptional results, tailored to meet your unique needs.
        </p>
      </div>
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6">
          <div className="w-8">
            <img src="/home/checklist.png" alt="check" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Integration</h3>
          <p className="text-gray-600">
            ProChain provides data and information that flows to all parts of
            the company quickly and accurately.
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="w-8">
            <img src="/home/checklist.png" alt="check" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Data Security</h3>
          <p className="text-gray-600">
            The proven data security of the ProChain system keeps company data
            and assets safe.
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="w-8">
            <img src="/home/checklist.png" alt="check" />
          </div>
          <h3 className="text-lg font-semibold mb-2">User Friendly</h3>
          <p className="text-gray-600">
            ProChain makes it easy for users to operate the ProChain system.
          </p>
        </div>

        <div className="bg-white p-6">
          <div className="w-8">
            <img src="/home/checklist.png" alt="check" />
          </div>
          <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            24 hours 7 days support from the Dimata team guarantees the use of
            the ProChain system with high reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
