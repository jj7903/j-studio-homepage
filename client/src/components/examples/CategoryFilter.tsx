import { useState } from 'react';
import { AppProvider } from '@/lib/context';
import CategoryFilter from '../CategoryFilter';

export default function CategoryFilterExample() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <AppProvider>
      <div className="p-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </AppProvider>
  );
}