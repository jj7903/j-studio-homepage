import { Button } from '@/components/ui/button';
import { useAppContext } from '@/lib/context';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = ['all', 'productivity', 'utilities', 'entertainment'];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const { t } = useAppContext();

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => {
            onCategoryChange(category);
            console.log('Category changed to:', category);
          }}
          data-testid={`button-category-${category}`}
          className="hover-elevate"
        >
          {t.apps.categories[category as keyof typeof t.apps.categories]}
        </Button>
      ))}
    </div>
  );
}