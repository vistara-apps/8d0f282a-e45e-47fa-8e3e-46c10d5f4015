'use client';

import { Check, Trash2 } from 'lucide-react';

interface Task {
  id: string;
  description: string;
  energyLevel: 'low' | 'medium' | 'high';
  isCompleted: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="group flex items-center gap-3 p-3 rounded-lg bg-bg/50 hover:bg-bg transition-colors duration-200">
      <button
        onClick={() => onToggle(task.id)}
        className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
          task.isCompleted
            ? 'bg-primary border-primary'
            : 'border-text-secondary hover:border-primary'
        }`}
        aria-label={task.isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {task.isCompleted && <Check className="w-3 h-3 text-white" />}
      </button>
      
      <span
        className={`flex-1 text-sm transition-all duration-200 ${
          task.isCompleted
            ? 'text-text-secondary line-through'
            : 'text-text-primary'
        }`}
      >
        {task.description}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-surface rounded"
        aria-label="Delete task"
      >
        <Trash2 className="w-4 h-4 text-text-secondary hover:text-low-energy" />
      </button>
    </div>
  );
}
