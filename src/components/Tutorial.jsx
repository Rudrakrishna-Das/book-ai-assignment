import Card from "./Card";

const Tutorial = () => {
  return (
    <section id="tutorial" className="text-white">
      <Card>
        <h1 className="mb-10 text-heading text-3xl font-bold">Tutorial</h1>
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-heading text-xl font-semibold">
              Step 1: Obtain an API Key
            </h1>
            <p>
              Generate an API key using the button in the Authentication section
              above.
            </p>
          </div>
          <div>
            <h1 className="text-heading text-xl font-semibold">
              Step 2: Make a Request
            </h1>
            <p>
              Use your preferred programming language or tool to make a POST
              request to the /api/generate-book endpoint. Include your API key
              in the header and the required parameters in the request body.
            </p>
          </div>
          <div>
            <h1 className="text-heading text-xl font-semibold">
              Step 3: Handle the Response
            </h1>
            <p>
              The API will return a response with a job ID. You can use this ID
              to check the status of your book generation job.
            </p>
          </div>
          <div>
            <h1 className="text-heading text-xl font-semibold">
              Step 4: Retrieve the Generated Book
            </h1>
            <p>
              Once the job is complete, you can retrieve the generated book
              using the job ID (endpoint to be implemented).
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Tutorial;
