
import { Link, useLocation } from 'react-router-dom';
import { Calendar, FileText, Truck, Home, Users, BarChart3 } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Calendar', path: '/calendar', icon: Calendar },
    { name: 'Invoices', path: '/invoices', icon: FileText },
    { name: 'Vehicles', path: '/vehicles', icon: Truck },
    { name: 'Customers', path: '/customers', icon: Users },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
  ];

  return (
    <nav className="bg-teal-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">LogiServe</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                        isActive
                          ? 'bg-teal-700 text-white'
                          : 'text-teal-100 hover:bg-teal-500 hover:text-white'
                      }`}
                    >
                      <Icon size={16} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
