import OpenAI from "openai";
import { OpenAi_Key } from "./constants.js"; // openai my API key

const openai = new OpenAI({
  apiKey: OpenAi_Key,
  dangerouslyAllowBrowser: true,
});

export default openai;

/* const response = await client.responses.create({
   model: "gpt-4o",
   input: "Are semicolons optional in JavaScript?",
 });

 console.log(response.output_text);
*/

// OpenAI SDK library
/*
  npm install openai
*/
