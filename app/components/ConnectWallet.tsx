'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // In production, this would use OnchainKit's ConnectWallet component
    setIsConnected(true);
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-primary/20">
        <div className="w-2 h-2 rounded-full bg-high-energy"></div>
        <span className="text-sm text-text-primary">Connected</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-accent text-white transition-colors duration-200"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect</span>
    </button>
  );
}
