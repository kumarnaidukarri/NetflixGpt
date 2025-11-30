import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const response = await client.responses.create({
  model: "gpt-4o",
  input: "Are semicolons optional in JavaScript?",
});

console.log(response.output_text);

// OpenAI SDK library
/*
  npm install openai
*/
