# MoodFlow - Energy-Based Task Manager

A Base Mini App that helps users organize tasks by energy level rather than deadlines, integrated with Farcaster social primitives.

## Features

- **Energy-Based Task Organization**: Categorize tasks into Low, Medium, and High energy buckets
- **Farcaster Integration**: Social sharing and notifications via MiniKit
- **Base Blockchain**: Gasless transactions and on-chain achievements via OnchainKit
- **Basename Identity**: Unique productivity persona with verifiable rewards
- **Mobile-First Design**: Optimized for Base App experience

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS (BASE theme)
- OnchainKit for wallet and transactions
- MiniKit for Farcaster integration
- Base blockchain (Chain ID: 8453)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit and React Query providers
│   ├── ConnectWallet.tsx
│   ├── UserProfile.tsx
│   ├── EnergyBuckets.tsx
│   ├── TaskItem.tsx
│   └── AddTaskModal.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Main page
└── globals.css         # Global styles with BASE theme

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
