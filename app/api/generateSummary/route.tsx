import { NextResponse } from "next/server";

export async function POST(request: Request){
  const {todos} = await request.json();
  console.log(todos);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
  })
}