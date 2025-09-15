import { AppProvider } from '@/lib/context';
import SearchBar from '../SearchBar';

export default function SearchBarExample() {
  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  return (
    <AppProvider>
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
      </div>
    </AppProvider>
  );
}