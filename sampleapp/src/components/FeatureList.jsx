import React from "react";
import FeatureCard from "./FeatureCard";

// Import your icons
import search from "../assets/advanced-search.svg";
import growth from "../assets/growth.svg";
import integrations from "../assets/integrations.svg";
import lightbulb from "../assets/lightbulb.svg";

const FeatureList = () => {
  return (
        <div>
          <FeatureCard
            icon={search}
            title="Advanced Detection Accuracy"
            description="Identify VPN usage with precision, ensuring you stay in full control of user access and security."
          />
          <FeatureCard
            icon={growth}
            title="Reliable and Scalable"
            description="Our system grows with your needs, delivering consistent performance whether you monitor hundreds or millions of users."
          />
          <FeatureCard
            icon={integrations}
            title="Seamless Integration"
            description="Easily embed our VPN detection into your existing platforms without disrupting your operations."
          />
          <FeatureCard
            icon={lightbulb}
            title="Constant Innovation"
            description="Benefit from regular updates that adapt to new VPN technologies, keeping you one step ahead of potential threats."
          />
        </div>
  );
};

export default FeatureList;
