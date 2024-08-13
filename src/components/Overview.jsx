import Card from "./Card";

const Overview = () => {
  return (
    <section id="overview">
      <Card>
        <h1 className="text-heading text-2xl font-bold">Overview</h1>
        <p className="text-white text-justify">
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </Card>
    </section>
  );
};

export default Overview;
