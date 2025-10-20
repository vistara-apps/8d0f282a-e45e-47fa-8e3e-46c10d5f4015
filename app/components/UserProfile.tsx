'use client';

import { User } from 'lucide-react';

export function UserProfile() {
  // In production, this would use useMiniKit to get Farcaster user context
  const user = {
    displayName: 'Demo User',
    pfpUrl: null,
  };

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-primary/20">
        {user.pfpUrl ? (
          <img src={user.pfpUrl} alt={user.displayName} className="w-full h-full rounded-full" />
        ) : (
          <User className="w-4 h-4 text-text-secondary" />
        )}
      </div>
      <span className="text-sm text-text-primary hidden md:block">{user.displayName}</span>
    </div>
  );
}
