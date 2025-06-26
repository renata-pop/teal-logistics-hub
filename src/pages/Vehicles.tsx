
import { useState } from 'react';
import { Truck, MapPin, Fuel, Wrench, Plus, Filter, Search, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Vehicles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const vehicles = [
    {
      id: 'TR-001',
      model: 'Mercedes Sprinter',
      year: 2022,
      status: 'active',
      location: 'Downtown Depot',
      driver: 'John Smith',
      fuelLevel: 85,
      mileage: 45320,
      nextMaintenance: '2024-02-15',
      condition: 'excellent'
    },
    {
      id: 'TR-002',
      model: 'Ford Transit',
      year: 2021,
      status: 'in-transit',
      location: 'Route 45 - Mile 23',
      driver: 'Sarah Johnson',
      fuelLevel: 45,
      mileage: 67890,
      nextMaintenance: '2024-01-28',
      condition: 'good'
    },
    {
      id: 'TR-003',
      model: 'Isuzu NPR',
      year: 2020,
      status: 'maintenance',
      location: 'Service Center A',
      driver: 'Unassigned',
      fuelLevel: 20,
      mileage: 89450,
      nextMaintenance: '2024-01-20',
      condition: 'needs-attention'
    },
    {
      id: 'TR-004',
      model: 'Volvo FH',
      year: 2023,
      status: 'active',
      location: 'North Warehouse',
      driver: 'Mike Wilson',
      fuelLevel: 92,
      mileage: 23100,
      nextMaintenance: '2024-03-10',
      condition: 'excellent'
    },
    {
      id: 'TR-005',
      model: 'MAN TGX',
      year: 2019,
      status: 'offline',
      location: 'Parking Lot B',
      driver: 'Unassigned',
      fuelLevel: 60,
      mileage: 125670,
      nextMaintenance: '2024-01-25',
      condition: 'good'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-transit': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'offline': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getConditionIcon = (condition: string) => {
    switch (condition) {
      case 'excellent': return <CheckCircle className="text-green-500" size={16} />;
      case 'good': return <CheckCircle className="text-blue-500" size={16} />;
      case 'needs-attention': return <AlertTriangle className="text-yellow-500" size={16} />;
      default: return <Clock className="text-gray-500" size={16} />;
    }
  };

  const getFuelLevelColor = (level: number) => {
    if (level > 60) return 'bg-green-500';
    if (level > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const activeVehicles = vehicles.filter(v => v.status === 'active').length;
  const inTransit = vehicles.filter(v => v.status === 'in-transit').length;
  const maintenanceNeeded = vehicles.filter(v => v.status === 'maintenance').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Fleet Management</h1>
            <p className="text-gray-600">Monitor and manage your vehicle fleet</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
              <Plus size={16} />
              Add Vehicle
            </Button>
          </div>
        </div>

        {/* Fleet Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Fleet</p>
                  <p className="text-2xl font-bold text-gray-900">{vehicles.length}</p>
                </div>
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-green-600">{activeVehicles}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">In Transit</p>
                  <p className="text-2xl font-bold text-blue-600">{inTransit}</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Maintenance</p>
                  <p className="text-2xl font-bold text-yellow-600">{maintenanceNeeded}</p>
                </div>
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search vehicles by ID, model, or driver..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-blue-600">{vehicle.id}</CardTitle>
                    <p className="text-gray-600">{vehicle.model} ({vehicle.year})</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(vehicle.status)}`}>
                    {vehicle.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Driver & Location */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-700">{vehicle.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Driver:</span>
                    <span className="text-gray-700 font-medium">{vehicle.driver}</span>
                  </div>
                </div>

                {/* Fuel Level */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Fuel size={16} />
                      Fuel Level
                    </span>
                    <span className="text-sm font-medium">{vehicle.fuelLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getFuelLevelColor(vehicle.fuelLevel)}`}
                      style={{ width: `${vehicle.fuelLevel}%` }}
                    ></div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500">Mileage</p>
                    <p className="text-sm font-medium">{vehicle.mileage.toLocaleString()} mi</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Next Service</p>
                    <p className="text-sm font-medium">{vehicle.nextMaintenance}</p>
                  </div>
                </div>

                {/* Condition */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {getConditionIcon(vehicle.condition)}
                    <span className="text-sm capitalize">{vehicle.condition.replace('-', ' ')}</span>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
