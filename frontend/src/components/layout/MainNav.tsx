import { Link } from 'react-router-dom';

export function MainNav() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 justify-between items-center">
          <Link to="/" className="text-xl font-bold">
            Professional Network
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/jobs" className="text-gray-700 hover:text-gray-900">
              Jobs
            </Link>
            <Link to="/network" className="text-gray-700 hover:text-gray-900">
              Network
            </Link>
            <Link to="/messages" className="text-gray-700 hover:text-gray-900">
              Messages
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}