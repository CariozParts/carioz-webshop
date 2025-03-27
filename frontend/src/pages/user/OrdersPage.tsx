import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const OrdersPage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  // Mock data for orders (replace with actual API call)
  const orders = [
    {
      id: '1',
      date: '2024-03-15',
      status: 'Delivered',
      total: 299.99,
      items: [
        {
          id: '1',
          name: 'Brake Pads',
          price: 149.99,
          quantity: 2,
          image:
            'https://images.unsplash.com/photo-1580273916550-e-67c83254868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        },
      ],
    },
    {
      id: '2',
      date: '2024-03-10',
      status: 'Processing',
      total: 199.99,
      items: [
        {
          id: '2',
          name: 'Oil Filter',
          price: 199.99,
          quantity: 1,
          image:
            'https://images.unsplash.com/photo-1580273916550-e-67c83254868?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Orders</h1>
      {orders.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow overflow-hidden sm:rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Order #{order.id}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Delivered'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-16 w-16">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-16 w-16 rounded-md object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-gray-900">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            ${item.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4 py-4 sm:px-6 bg-gray-50">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">Order total</p>
                  <p className="text-lg font-medium text-gray-900">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage; 