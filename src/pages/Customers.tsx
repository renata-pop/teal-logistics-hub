
import { Users, Phone, Mail, MapPin, Plus, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: 'ABC Manufacturing',
      contact: 'John Davis',
      email: 'john@abcmfg.com',
      phone: '+1 (555) 123-4567',
      address: '123 Industrial Ave, City A',
      totalOrders: 24,
      totalValue: 45000,
      status: 'active'
    },
    {
      id: 2,
      name: 'XYZ Retail Chain',
      contact: 'Sarah Miller',
      email: 'sarah@xyzretail.com',
      phone: '+1 (555) 234-5678',
      address: '456 Commerce St, City B',
      totalOrders: 18,
      totalValue: 32000,
      status: 'active'
    },
    {
      id: 3,
      name: 'Global Supplies Co.',
      contact: 'Mike Johnson',
      email: 'mike@globalsupplies.com',
      phone: '+1 (555) 345-6789',
      address: '789 Trade Blvd, City C',
      totalOrders: 31,
      totalValue: 78500,
      status: 'premium'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Management</h1>
            <p className="text-gray-600">Manage customer relationships and support</p>
          </div>
          <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
            <Plus size={16} />
            Add Customer
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input placeholder="Search customers..." className="pl-10" />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => (
            <Card key={customer.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">{customer.name}</CardTitle>
                <p className="text-gray-600">{customer.contact}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} />
                    {customer.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} />
                    {customer.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    {customer.address}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Total Orders</p>
                    <p className="text-lg font-semibold">{customer.totalOrders}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Total Value</p>
                    <p className="text-lg font-semibold">${customer.totalValue.toLocaleString()}</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
