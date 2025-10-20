'use client';

import { useState } from 'react';
import { X, Battery, Zap, Flame } from 'lucide-react';

interface AddTaskModalProps {
  onClose: () => void;
}

export function AddTaskModal({ onClose }: AddTaskModalProps) {
  const [description, setDescription] = useState('');
  const [energyLevel, setEnergyLevel] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;
    
    // In production, this would save to state/database
    console.log('Adding task:', { description, energyLevel });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-surface rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-text-primary">Add New Task</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-bg rounded transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="task-description" className="block text-sm font-medium text-text-primary mb-2">
              Task Description
            </label>
            <input
              id="task-description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What needs to be done?"
              className="w-full px-4 py-3 rounded-lg bg-bg border border-surface focus:border-primary outline-none text-text-primary placeholder-text-secondary transition-colors duration-200"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-3">
              Energy Level
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setEnergyLevel('low')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  energyLevel === 'low'
                    ? 'border-low-energy bg-low-energy/10'
                    : 'border-surface hover:border-low-energy/50'
                }`}
              >
                <Battery className="w-6 h-6 text-low-energy mx-auto mb-2" />
                <span className="text-sm text-text-primary">Low</span>
              </button>

              <button
                type="button"
                onClick={() => setEnergyLevel('medium')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  energyLevel === 'medium'
                    ? 'border-medium-energy bg-medium-energy/10'
                    : 'border-surface hover:border-medium-energy/50'
                }`}
              >
                <Zap className="w-6 h-6 text-medium-energy mx-auto mb-2" />
                <span className="text-sm text-text-primary">Medium</span>
              </button>

              <button
                type="button"
                onClick={() => setEnergyLevel('high')}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  energyLevel === 'high'
                    ? 'border-high-energy bg-high-energy/10'
                    : 'border-surface hover:border-high-energy/50'
                }`}
              >
                <Flame className="w-6 h-6 text-high-energy mx-auto mb-2" />
                <span className="text-sm text-text-primary">High</span>
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-lg bg-bg hover:bg-surface text-text-primary transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!description.trim()}
              className="flex-1 px-4 py-3 rounded-lg bg-primary hover:bg-accent text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
