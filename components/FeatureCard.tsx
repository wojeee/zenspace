import React from "react";

type FeatureCardProps = {
  icon: string; // URL or path to the icon image
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="feature-card p-4 text-center">
      <img src={icon} alt={title} className="w-12 h-12 mx-auto mb-2" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
