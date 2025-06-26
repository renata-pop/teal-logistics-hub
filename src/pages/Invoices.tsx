
import { useState } from 'react';
import { FileText, Search, Download, Plus, Filter, Eye, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const invoices = [
    {
      id: 'INV-2024-001',
      customer: 'ABC Manufacturing',
      amount: 2450.00,
      status: 'paid',
      dueDate: '2024-01-15',
      issueDate: '2024-01-01',
      service: 'Freight Transport'
    },
    {
      id: 'INV-2024-002',
      customer: 'XYZ Retail Chain',
      amount: 1875.50,
      status: 'pending',
      dueDate: '2024-01-20',
      issueDate: '2024-01-05',
      service: 'Express Delivery'
    },
    {
      id: 'INV-2024-003',
      customer: 'Global Supplies Co.',
      amount: 3200.75,
      status: 'overdue',
      dueDate: '2024-01-10',
      issueDate: '2023-12-27',
      service: 'Warehouse Storage'
    },
    {
      id: 'INV-2024-004',
      customer: 'Metro Logistics',
      amount: 1650.00,
      status: 'draft',
      dueDate: '2024-01-25',
      issueDate: '2024-01-08',
      service: 'Local Distribution'
    },
    {
      id: 'INV-2024-005',
      customer: 'TechCorp Industries',
      amount: 4100.25,
      status: 'paid',
      dueDate: '2024-01-18',
      issueDate: '2024-01-03',
      service: 'International Shipping'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800 border-green-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      case 'draft': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle size={16} />;
      case 'pending': return <Clock size={16} />;
      case 'overdue': return <Clock size={16} />;
      case 'draft': return <FileText size={16} />;
      default: return <FileText size={16} />;
    }
  };

  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
  const paidAmount = invoices.filter(inv => inv.status === 'paid').reduce((sum, invoice) => sum + invoice.amount, 0);
  const pendingAmount = invoices.filter(inv => inv.status === 'pending').reduce((sum, invoice) => sum + invoice.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoice Management</h1>
            <p className="text-gray-600">Track billing and payment status</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={16} />
              Filter
            </Button>
            <Button className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700">
              <Plus size={16} />
              New Invoice
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Invoiced</p>
                  <p className="text-2xl font-bold text-gray-900">${totalAmount.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Paid Amount</p>
                  <p className="text-2xl font-bold text-green-600">${paidAmount.toLocaleString()}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Amount</p>
                  <p className="text-2xl font-bold text-yellow-600">${pendingAmount.toLocaleString()}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Search invoices by customer or invoice ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoices Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Invoice List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-medium text-gray-700">Invoice ID</th>
                    <th className="text-left p-4 font-medium text-gray-700">Customer</th>
                    <th className="text-left p-4 font-medium text-gray-700">Service</th>
                    <th className="text-left p-4 font-medium text-gray-700">Amount</th>
                    <th className="text-left p-4 font-medium text-gray-700">Status</th>
                    <th className="text-left p-4 font-medium text-gray-700">Due Date</th>
                    <th className="text-left p-4 font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="p-4">
                        <span className="font-medium text-blue-600">{invoice.id}</span>
                      </td>
                      <td className="p-4">
                        <div>
                          <div className="font-medium text-gray-900">{invoice.customer}</div>
                          <div className="text-sm text-gray-500">Issued: {invoice.issueDate}</div>
                        </div>
                      </td>
                      <td className="p-4 text-gray-700">{invoice.service}</td>
                      <td className="p-4">
                        <span className="font-semibold text-gray-900">${invoice.amount.toLocaleString()}</span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                          {getStatusIcon(invoice.status)}
                          {invoice.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-4 text-gray-700">{invoice.dueDate}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Eye size={14} />
                            View
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <Download size={14} />
                            PDF
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Invoices;
