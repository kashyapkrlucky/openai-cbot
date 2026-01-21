# Gemini Chatbot

A minimal Next.js chatbot application that integrates with Google's Gemini AI model.

## Features

- Real-time chat interface with Google Gemini
- Clean, responsive UI built with Tailwind CSS
- Error handling and loading states
- TypeScript support

## Setup

### 1. Get Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key for the next step

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Get your Gemini API key from: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Install Dependencies

```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start chatting with Gemini.

## Deployment on Vercel

### Automatic Deployment

1. Push your code to a GitHub repository
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import the repository
4. Add the `GEMINI_API_KEY` environment variable in Vercel's dashboard
5. Deploy

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Set environment variable:
   ```bash
   vercel env add GEMINI_API_KEY
   ```

3. Deploy:
   ```bash
   vercel --prod
   ```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts    # API endpoint for Gemini integration
│   ├── page.tsx            # Main chat interface
│   └── layout.tsx          # Root layout
└── components/             # (if needed)
```

## API Usage

The chat API endpoint is available at `/api/chat`:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, how are you?"}'
```

## Error Handling

The application includes comprehensive error handling for:
- Missing API keys
- Invalid requests
- API rate limits
- Network errors

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@google/genai](https://www.npmjs.com/package/@google/genai) - Gemini API client
