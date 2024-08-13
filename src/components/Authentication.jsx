import { useState } from "react";
import Card from "./Card";
const apiKeyGenerator = () => {
  const alphanumericArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let newStr = "";
  for (let i = 0; i < 44; i++) {
    newStr +=
      alphanumericArray[Math.floor(Math.random() * alphanumericArray.length)];
  }
  return newStr;
};

const Authentication = () => {
  const [apiKey, setApiKey] = useState("");
  const generateKey = () => {
    setApiKey(apiKeyGenerator());
  };
  return (
    <section id="authentication">
      <Card>
        <h1 className="text-heading text-2xl font-bold">Authentication</h1>
        <p className="text-white">
          To use the API, you need to include your API key in the header of each
          request:
        </p>

        <pre className="border-[1px] border-[#576374] p-4 rounded-md overflow-auto ">
          <code className="text-white text-center mt-6 border-[1px] p-4 overflow-auto  border-[#576374] rounded-md ">
            X-API-Key: YOUR_API_KEY
          </code>
        </pre>

        <p className="text-white">
          To generate an API key, use the button below:
        </p>
        <button
          onClick={generateKey}
          className="bg-[#22d3ee] mt-8 mb-4 font-bold px-8  py-2 rounded-lg duration-500 hover:bg-blue-400 hover:-translate-y-1 text-xl"
        >
          Generate API Key
        </button>
        <div className="border-[1px] p-4 rounded-md border-[#576374] text-white text-xl font-semibold break-words">
          {apiKey.length > 0 && <p>Your&nbsp;Api&nbsp;key:&nbsp;{apiKey}</p>}
        </div>
      </Card>
    </section>
  );
};

export default Authentication;
