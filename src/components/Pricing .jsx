import Card from "./Card";

const Pricing = () => {
  return (
    <section id="pricing" className="text-white">
      <Card>
        <h1 className="text-heading text-2xl font-bold">API Pricing</h1>
        <p className="mb-3">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <div className="border-[1px] border-gray-500 rounded-lg overflow-y-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-back text-white">
              <tr>
                <th className="p-4 text-left">API</th>
                <th className="p-4 text-left">MODEL</th>
                <th className="p-4 text-left">PRICE PER 1K TOKENS</th>
              </tr>
            </thead>
            <tbody className=" text-white">
              <tr className="border-b-[1px] border-gray-500">
                <td className="p-4">
                  <code className="text-[#22d3ee]">OpenAI</code>
                </td>
                <td className="p-4">
                  <code>GPT-3.5</code>
                </td>
                <td className="p-4">$0.002</td>
              </tr>
              <tr className="border-b-[1px] border-gray-500">
                <td className="p-4">
                  <code className="text-[#22d3ee]">OpenAI</code>
                </td>
                <td className="p-4">
                  <code>GPT-4</code>
                </td>
                <td className="p-4">$0.03</td>
              </tr>
              <tr className="border-b-[1px] border-gray-500">
                <td className="p-4">
                  <code className="text-[#22d3ee]">Together AI</code>
                </td>
                <td className="p-4">
                  <code>Llama-2-70b</code>
                </td>
                <td className="p-4">$0.0008</td>
              </tr>
              <tr className="border-b-[1px] border-gray-500">
                <td className="p-4">
                  <code className="text-[#22d3ee]">Together AI</code>
                </td>
                <td className="p-4">
                  <code>Llama-2-19b</code>
                </td>
                <td className="p-4">$0.0006</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-6">
          <h1 className="text-heading text-xl font-bold">Token Estimation</h1>
          <p>
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
        <div>
          <h1 className="text-heading text-xl font-bold">Billing</h1>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default Pricing;
