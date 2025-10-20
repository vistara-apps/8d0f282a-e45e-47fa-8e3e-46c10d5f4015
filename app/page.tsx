'use client';

import { useEffect, useState } from 'react';
import { ConnectWallet } from './components/ConnectWallet';
import { EnergyBuckets } from './components/EnergyBuckets';
import { UserProfile } from './components/UserProfile';
import { AddTaskModal } from './components/AddTaskModal';
import { Plus } from 'lucide-react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Signal to Farcaster that the frame is ready
    if (typeof window !== 'undefined' && (window as any).parent) {
      (window as any).parent.postMessage({ type: 'frame-ready' }, '*');
    }
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-text-primary">Loading MoodFlow...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-surface">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-2xl">🌊</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-text-primary">MoodFlow</h1>
                <p className="text-sm text-text-secondary">Energy-Based Tasks</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <UserProfile />
              <ConnectWallet />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-text-primary mb-2">
            Welcome to MoodFlow
          </h2>
          <p className="text-text-secondary">
            Organize your tasks by energy level, not deadlines. Work with your natural flow.
          </p>
        </div>

        {/* Energy Buckets */}
        <EnergyBuckets />

        {/* Add Task Button */}
        <button
          onClick={() => setShowAddTask(true)}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary hover:bg-accent text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="Add new task"
        >
          <Plus className="w-6 h-6" />
        </button>

        {/* Add Task Modal */}
        {showAddTask && (
          <AddTaskModal onClose={() => setShowAddTask(false)} />
        )}
      </div>
    </main>
  );
}
