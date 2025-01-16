import { Outlet } from 'react-router-dom';
import { MainNav } from './MainNav';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}