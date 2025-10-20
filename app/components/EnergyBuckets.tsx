'use client';

import { useState } from 'react';
import { TaskItem } from './TaskItem';
import { Battery, Zap, Flame } from 'lucide-react';

type EnergyLevel = 'low' | 'medium' | 'high';

interface Task {
  id: string;
  description: string;
  energyLevel: EnergyLevel;
  isCompleted: boolean;
}

const initialTasks: Task[] = [
  { id: '1', description: 'Review emails', energyLevel: 'low', isCompleted: false },
  { id: '2', description: 'Plan weekly goals', energyLevel: 'medium', isCompleted: false },
  { id: '3', description: 'Deep work session', energyLevel: 'high', isCompleted: false },
  { id: '4', description: 'Quick admin tasks', energyLevel: 'low', isCompleted: false },
  { id: '5', description: 'Team meeting prep', energyLevel: 'medium', isCompleted: false },
];

export function EnergyBuckets() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const lowEnergyTasks = tasks.filter(t => t.energyLevel === 'low');
  const mediumEnergyTasks = tasks.filter(t => t.energyLevel === 'medium');
  const highEnergyTasks = tasks.filter(t => t.energyLevel === 'high');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Low Energy */}
      <div className="bg-surface rounded-lg p-6 border border-low-energy/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-low-energy/10 flex items-center justify-center">
            <Battery className="w-5 h-5 text-low-energy" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Low Energy</h3>
            <p className="text-sm text-text-secondary">{lowEnergyTasks.length} tasks</p>
          </div>
        </div>
        <div className="space-y-3">
          {lowEnergyTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
          {lowEnergyTasks.length === 0 && (
            <p className="text-sm text-text-secondary text-center py-8">
              No low energy tasks
            </p>
          )}
        </div>
      </div>

      {/* Medium Energy */}
      <div className="bg-surface rounded-lg p-6 border border-medium-energy/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-medium-energy/10 flex items-center justify-center">
            <Zap className="w-5 h-5 text-medium-energy" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Medium Energy</h3>
            <p className="text-sm text-text-secondary">{mediumEnergyTasks.length} tasks</p>
          </div>
        </div>
        <div className="space-y-3">
          {mediumEnergyTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
          {mediumEnergyTasks.length === 0 && (
            <p className="text-sm text-text-secondary text-center py-8">
              No medium energy tasks
            </p>
          )}
        </div>
      </div>

      {/* High Energy */}
      <div className="bg-surface rounded-lg p-6 border border-high-energy/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-high-energy/10 flex items-center justify-center">
            <Flame className="w-5 h-5 text-high-energy" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">High Energy</h3>
            <p className="text-sm text-text-secondary">{highEnergyTasks.length} tasks</p>
          </div>
        </div>
        <div className="space-y-3">
          {highEnergyTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
          {highEnergyTasks.length === 0 && (
            <p className="text-sm text-text-secondary text-center py-8">
              No high energy tasks
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
