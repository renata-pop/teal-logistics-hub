
import { Link } from 'react-router-dom';
import { Calendar, FileText, Truck, Users, BarChart3, AlertCircle, CheckCircle, Clock, Package } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Index = () => {
  const modules = [
    {
      title: 'Calendar',
      description: 'Schedule and manage deliveries',
      icon: Calendar,
      path: '/calendar',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Invoices',
      description: 'Billing and payment tracking',
      icon: FileText,
      path: '/invoices',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Vehicles',
      description: 'Fleet management and tracking',
      icon: Truck,
      path: '/vehicles',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Customers',
      description: 'Client management and support',
      icon: Users,
      path: '/customers',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Reports',
      description: 'Analytics and performance metrics',
      icon: BarChart3,
      path: '/reports',
      color: 'bg-blue-50 hover:bg-blue-100 border-blue-200',
      iconColor: 'text-blue-600'
    }
  ];

  const stats = [
    { label: 'Active Deliveries', value: '24', icon: Package, color: 'text-green-600 bg-green-50' },
    { label: 'Pending Issues', value: '3', icon: AlertCircle, color: 'text-red-600 bg-red-50' },
    { label: 'Completed Today', value: '18', icon: CheckCircle, color: 'text-blue-600 bg-blue-50' },
    { label: 'In Transit', value: '12', icon: Clock, color: 'text-yellow-600 bg-yellow-50' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Service Dashboard</h1>
          <p className="text-gray-600">Welcome to LogiServe - Your logistics management hub</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Modules */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-600 mb-6">Service Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.title}
                  to={module.path}
                  className={`block p-6 rounded-lg border-2 transition-all duration-200 transform hover:scale-105 ${module.color}`}
                >
                  <div className="flex items-center mb-4">
                    <Icon className={`h-8 w-8 ${module.iconColor}`} />
                    <h3 className="ml-3 text-lg font-semibold text-blue-600">{module.title}</h3>
                  </div>
                  <p className="text-gray-600">{module.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-sm text-gray-700">Delivery #D-2024-001 completed successfully</span>
              <span className="ml-auto text-xs text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <span className="ml-3 text-sm text-gray-700">Vehicle maintenance required for TR-445</span>
              <span className="ml-auto text-xs text-gray-500">4 hours ago</span>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-500" />
              <span className="ml-3 text-sm text-gray-700">New shipment scheduled for tomorrow</span>
              <span className="ml-auto text-xs text-gray-500">6 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
