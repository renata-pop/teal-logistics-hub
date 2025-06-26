
import { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Filter, MapPin, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const deliveries = [
    {
      id: 1,
      time: '09:00 AM',
      customer: 'ABC Manufacturing',
      location: '123 Industrial Ave, City A',
      status: 'scheduled',
      vehicle: 'TR-001'
    },
    {
      id: 2,
      time: '11:30 AM',
      customer: 'XYZ Retail Chain',
      location: '456 Commerce St, City B',
      status: 'in-progress',
      vehicle: 'TR-002'
    },
    {
      id: 3,
      time: '02:00 PM',
      customer: 'Global Supplies Co.',
      location: '789 Trade Blvd, City C',
      status: 'scheduled',
      vehicle: 'TR-003'
    },
    {
      id: 4,
      time: '04:30 PM',
      customer: 'Metro Logistics',
      location: '321 Warehouse Rd, City D',
      status: 'completed',
      vehicle: 'TR-001'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Delivery Calendar</h1>
            <p className="text-gray-600">Schedule and track delivery appointments</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
              <Plus size={16} />
              New Delivery
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Widget */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <CalendarIcon size={20} />
                Calendar View
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-8 bg-teal-50 rounded-lg">
                <CalendarIcon size={48} className="mx-auto text-teal-600 mb-4" />
                <p className="text-gray-700">Interactive calendar widget would be integrated here</p>
                <p className="text-sm text-gray-500 mt-2">Current: {selectedDate.toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>

          {/* Today's Schedule */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-blue-600">Today's Deliveries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {deliveries.map((delivery) => (
                  <div key={delivery.id} className="border rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-lg font-semibold text-gray-900">{delivery.time}</div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(delivery.status)}`}>
                          {delivery.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-700">
                        <User size={16} />
                        <span className="font-medium">{delivery.customer}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{delivery.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={16} />
                        <span>Vehicle: {delivery.vehicle}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-blue-600">Weekly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-4">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="text-center">
                  <div className="font-medium text-gray-700 mb-2">{day}</div>
                  <div className={`p-4 rounded-lg ${index === 2 ? 'bg-teal-100 border-2 border-teal-300' : 'bg-gray-50'}`}>
                    <div className="text-sm text-gray-600">{5 + index}</div>
                    <div className="text-xs text-gray-500 mt-1">{Math.floor(Math.random() * 8) + 2} deliveries</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
