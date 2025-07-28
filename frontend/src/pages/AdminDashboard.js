import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInventory } from '../components/InventoryContext';
import { useContent } from '../components/ContentContext';

const AdminDashboard = () => {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('inventory');
  const navigate = useNavigate();
  const { inventory, updateQuantity } = useInventory();
  const { content, updateContent, updateAboutValues } = useContent();

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleContentChange = (section, field, value) => {
    updateContent(section, field, value);
  };

  const handleAboutValuesChange = (index, value) => {
    const newValues = [...content.about.values];
    newValues[index] = value;
    updateAboutValues(newValues);
  };

  const handleSave = () => {
    setMessage('Changes saved successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin/login');
  };

  const products = [
    {
      id: 1,
      name: "Classic Steel Rims",
      quantity: inventory[1]?.quantity || 0,
      price: "$299"
    },
    {
      id: 2,
      name: "Retro Alloy Wheels",
      quantity: inventory[2]?.quantity || 0,
      price: "$449"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Trinity Forged Wheel Co. Management</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        {message && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {message}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('inventory')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'inventory'
                    ? 'border-theme-500 text-theme-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Inventory
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'about'
                    ? 'border-theme-500 text-theme-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'contact'
                    ? 'border-theme-500 text-theme-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>

        {/* Inventory Tab */}
        {activeTab === 'inventory' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Product Inventory</h2>
            
            <div className="space-y-6">
              {products.map((product) => (
                <div key={product.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                      <p className="text-gray-600">{product.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <label htmlFor={`quantity-${product.id}`} className="text-sm font-medium text-gray-700">
                        Quantity:
                      </label>
                      <input
                        id={`quantity-${product.id}`}
                        type="number"
                        min="0"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Us Tab */}
        {activeTab === 'about' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">About Us Content</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
                <input
                  type="text"
                  value={content.about?.title || ''}
                  onChange={(e) => handleContentChange('about', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={content.about?.description || ''}
                  onChange={(e) => handleContentChange('about', 'description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Our Story</label>
                <textarea
                  value={content.about?.story || ''}
                  onChange={(e) => handleContentChange('about', 'story', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Our Mission</label>
                <textarea
                  value={content.about?.mission || ''}
                  onChange={(e) => handleContentChange('about', 'mission', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Our Values</label>
                <div className="space-y-2">
                  {content.about?.values?.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      value={value}
                      onChange={(e) => handleAboutValuesChange(index, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                      placeholder={`Value ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Page Title</label>
                <input
                  type="text"
                  value={content.contact?.title || ''}
                  onChange={(e) => handleContentChange('contact', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
                <input
                  type="text"
                  value={content.contact?.subtitle || ''}
                  onChange={(e) => handleContentChange('contact', 'subtitle', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={content.contact?.email || ''}
                  onChange={(e) => handleContentChange('contact', 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="text"
                  value={content.contact?.phone || ''}
                  onChange={(e) => handleContentChange('contact', 'phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  value={content.contact?.address || ''}
                  onChange={(e) => handleContentChange('contact', 'address', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
                <textarea
                  value={content.contact?.hours || ''}
                  onChange={(e) => handleContentChange('contact', 'hours', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                  placeholder="Monday - Friday: 9:00 AM - 6:00 PM&#10;Saturday: 10:00 AM - 4:00 PM&#10;Sunday: Closed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={content.contact?.message || ''}
                  onChange={(e) => handleContentChange('contact', 'message', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-theme-500 focus:border-theme-500"
                />
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-theme-600 hover:bg-theme-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-theme-600 hover:text-theme-500">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 