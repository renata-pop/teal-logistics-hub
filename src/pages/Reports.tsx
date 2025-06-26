
import { BarChart3, TrendingUp, DollarSign, Package, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Reports = () => {
  const metrics = [
    { label: 'Monthly Revenue', value: '$125,430', change: '+12.5%', trend: 'up' },
    { label: 'Deliveries Completed', value: '1,247', change: '+8.2%', trend: 'up' },
    { label: 'Customer Satisfaction', value: '94.2%', change: '+2.1%', trend: 'up' },
    { label: 'Fleet Utilization', value: '87.5%', change: '-1.3%', trend: 'down' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Reports</h1>
          <p className="text-gray-600">Performance metrics and business insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className={`text-sm ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change}
                    </p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-12 bg-teal-50 rounded-lg">
              <BarChart3 size={64} className="mx-auto text-teal-600 mb-4" />
              <p className="text-gray-700 text-lg">Interactive charts and detailed analytics would be displayed here</p>
              <p className="text-gray-500 mt-2">Revenue trends, delivery performance, customer analytics, and more</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
