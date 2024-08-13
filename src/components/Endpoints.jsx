import Card from "./Card";

const EndPoints = () => {
  return (
    <section id="endpoints">
      <Card>
        <h1 className="text-heading text-2xl font-bold mb-14">Endpoints</h1>

        <div className="flex flex-col gap-2">
          <h3 className="text-heading text-xl font-bold">Generate book</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-[#22d3ee] rounded-md py-1 px-3 font-bold">
              POST
            </span>
            <span className="bg-back rounded-md py-3 px-8 font-bold">
              /api/generate-book
            </span>
          </div>
        </div>

        <div className="my-6">
          <h3 className="text-heading text-lg font-bold mb-4">Request Body</h3>

          <div className="border-[1px] border-gray-500 rounded-lg overflow-y-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-back text-white">
                <tr>
                  <th className="p-4">PARAMETER</th>
                  <th className="p-4">TYPE</th>
                  <th className="p-4">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody className=" text-white">
                <tr className="border-b-[1px] border-gray-500">
                  <td className="p-4">
                    <code className="text-[#22d3ee]">api</code>
                  </td>
                  <td className="p-4">
                    <code>string</code>
                  </td>
                  <td className="p-4">
                    The API provider to use. Options: "openai" or "together"
                  </td>
                </tr>
                <tr className="border-b-[1px] border-gray-500">
                  <td className="p-4">
                    <code className="text-[#22d3ee]">model</code>
                  </td>
                  <td className="p-4">
                    <code>string</code>
                  </td>
                  <td className="p-4">
                    The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
                    "llama-2-70b")
                  </td>
                </tr>
                <tr className="border-b-[1px] border-gray-500">
                  <td className="p-4">
                    <code className="text-[#22d3ee]">topic</code>
                  </td>
                  <td className="p-4">
                    <code>string</code>
                  </td>
                  <td className="p-4">The main topic or theme of the book</td>
                </tr>
                <tr className="border-b-[1px] border-gray-500">
                  <td className="p-4">
                    <code className="text-[#22d3ee]">language</code>
                  </td>
                  <td className="p-4">
                    <code>string</code>
                  </td>
                  <td className="p-4">
                    The language in which the book should be generated
                  </td>
                </tr>
                <tr>
                  <td className="p-4">
                    <code className="text-[#22d3ee]">word_count</code>
                  </td>
                  <td className="p-4">
                    <code>integer</code>
                  </td>
                  <td className="p-4">
                    The approximate number of words for the generated book
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h1 className="text-heading text-lg font-bold mb-4">Response</h1>
          <pre className="border-[1px] border-gray-500 p-5 text-white rounded-lg overflow-x-auto">
            <code>
              {JSON.stringify(
                {
                  message: "Book generation started",
                  status: "processing",
                  job_id: "unique-job-identifier",
                },
                null,
                2
              )}
            </code>
          </pre>
        </div>
      </Card>
    </section>
  );
};

export default EndPoints;
