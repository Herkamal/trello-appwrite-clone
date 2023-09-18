import { OpenAI } from "openai";
import Configuration from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

export default openai;