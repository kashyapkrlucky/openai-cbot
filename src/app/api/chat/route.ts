import { GoogleGenAI } from '@google/genai'

const ai = new GoogleGenAI({})

export async function POST(request: Request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return Response.json(
        { error: 'GEMINI_API_KEY environment variable is not set' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { message } = body

    if (!message) {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
    })
    
    return Response.json({ response: response.text })
  } catch (error) {
    console.error('Chat API error:', error)
    
    if (error instanceof Error) {
      if (error.message.includes('API_KEY')) {
        return Response.json(
          { error: 'Invalid or missing Gemini API key' },
          { status: 401 }
        )
      }
      
      if (error.message.includes('quota') || error.message.includes('rate limit')) {
        return Response.json(
          { error: 'API quota exceeded. Please check your Gemini API usage.' },
          { status: 429 }
        )
      }
    }

    return Response.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    )
  }
}
