import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState({
    about: {
      title: "About Trinity Forged Wheel Co.",
      description: "We specialize in custom forged wheels that bring back the iconic 90s look for your F-250. Our commitment to quality and authentic design has made us a trusted name in the automotive industry.",
      story: "Founded with a passion for classic truck aesthetics, Trinity Forged Wheel Co. has been delivering premium quality wheels that combine nostalgic design with modern engineering. Our team of experts understands the unique needs of truck enthusiasts who want that perfect blend of style and performance.",
      mission: "Our mission is to provide truck owners with wheels that not only look great but also meet the highest standards of durability and performance. We believe every truck deserves wheels that make a statement.",
      values: [
        "Quality craftsmanship in every product",
        "Authentic 90s design aesthetic",
        "Superior customer service",
        "Innovation in wheel technology"
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "Get in touch with Trinity Forged Wheel Co.",
      email: "info@trinityforgedwheelco.com",
      phone: "(555) 123-4567",
      address: "1234 Wheel Street, Truck City, TC 12345",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed",
      message: "Have questions about our wheels? Need help with fitment? We're here to help you find the perfect wheels for your truck."
    }
  });

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('trinityContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('trinityContent', JSON.stringify(content));
  }, [content]);

  const updateContent = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateAboutValues = (values) => {
    setContent(prev => ({
      ...prev,
      about: {
        ...prev.about,
        values: values
      }
    }));
  };

  const getContent = (section) => {
    return content[section] || {};
  };

  const getAllContent = () => {
    return content;
  };

  const value = {
    content,
    updateContent,
    updateAboutValues,
    getContent,
    getAllContent
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}; 