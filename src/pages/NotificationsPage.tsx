import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import { CheckCircle, Home, DollarSign, MapPin, Wrench } from 'lucide-react';

export function NotificationsPage() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'booking',
      icon: Wrench,
      iconColor: 'bg-green-100 text-green-600',
      title: 'Booking Confirmed',
      message: 'Your painting service booking has been confirmed for Dec 28, 2025',
      time: '2 hours ago',
      read: false,
      action: () => navigate('/my-projects')
    },
    {
      id: 2,
      type: 'design',
      icon: Home,
      iconColor: 'bg-purple-100 text-purple-600',
      title: 'Design Update',
      message: 'New 3D plan variations are now available for your Modern Villa project',
      time: '1 day ago',
      read: false,
      action: () => navigate('/plans')
    },
    {
      id: 3,
      type: 'loan',
      icon: DollarSign,
      iconColor: 'bg-blue-100 text-blue-600',
      title: 'Loan Contact Update',
      message: 'HDFC Bank will contact you tomorrow between 2-4 PM',
      time: '1 day ago',
      read: true,
      action: () => navigate('/loan-request')
    },
    {
      id: 4,
      type: 'inspection',
      icon: MapPin,
      iconColor: 'bg-red-100 text-red-600',
      title: 'Inspection Scheduled',
      message: 'Land inspection scheduled for Dec 28, 2025 at 10:00 AM',
      time: '3 days ago',
      read: true,
      action: () => navigate('/inspection-status/insp-001')
    },
    {
      id: 5,
      type: 'general',
      icon: CheckCircle,
      iconColor: 'bg-gray-100 text-gray-600',
      title: 'Requirements Submitted',
      message: 'Your project requirements have been successfully submitted',
      time: '1 week ago',
      read: true,
      action: () => navigate('/my-projects')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isAuthenticated={true} />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your project activities</p>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id}
              onClick={notification.action}
              className={`cursor-pointer hover:shadow-lg transition-shadow ${
                !notification.read ? 'border-l-4 border-l-blue-600' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${notification.iconColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <notification.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-gray-900">{notification.title}</h3>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-gray-500">{notification.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-gray-900 mb-2">No Notifications</h3>
            <p className="text-gray-600">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
