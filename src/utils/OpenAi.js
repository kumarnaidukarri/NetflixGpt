import OpenAI from "openai";
/*  import { OpenAi_Key } from "./constants.js";  //openai my API key 
    using ENV variable for api key.
 */

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OpenAi_Key,
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
