import React from 'react';

const Feature = ({ icon, title, titleColor, desc }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div>
        <h3 className={`text-[15px] font-medium mb-1.5 ${titleColor}`}>
          {title}
        </h3>
        <p className="text-[14px] text-[#475569] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Feature; 