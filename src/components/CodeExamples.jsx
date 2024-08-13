import Card from "./Card";

const CodeExamples = () => {
  return (
    <section id="code-examples" className="text-white">
      <Card>
        <h1 className="text-heading text-2xl font-bold ml-5 mb-12">
          Code Examples
        </h1>
        <div>
          <h1 className="text-heading text-xl font-bold">Python</h1>
          <pre className="border-[1px] border-gray-500 rounded-md p-3 overflow-x-auto ">
            <code>
              {`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`}
            </code>
          </pre>
        </div>

        <div className="mt-6">
          <h1 className="text-heading text-xl font-bold">
            JavaScript (Node.js)
          </h1>
          <pre className="border-[1px] border-gray-500 rounded-md p-3 overflow-x-auto ">
            <code>
              {`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
`}
            </code>
          </pre>
        </div>
      </Card>
    </section>
  );
};

export default CodeExamples;
