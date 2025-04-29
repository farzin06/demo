import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-3 mb-6">
      <img src={icon} alt={title} className="w-6 h-6 mt-1" />
      <div>
        <h3 className="text-sm font-semibold text-blue-700">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
