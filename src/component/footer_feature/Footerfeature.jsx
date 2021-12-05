import React from "react";
import { BsTruck, BsCreditCard } from "react-icons/bs";
import { GiBrokenShield } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import "./footerfeature.css";

const Footerfeature = () => {
  const footerfeature = [
    {
      name: "Free Delivery",
      icon: <BsTruck />,
      dis: "This free shipping only for selected region",
    },
    {
      name: "Payment Method",
      icon: <BsCreditCard />,
      dis: "This free shipping only for selected region",
    },
    {
      name: "Warrenty",
      icon: <GiBrokenShield />,
      dis: "This free shipping only for selected region",
    },
    {
      name: "Customer Support",
      icon: <RiCustomerService2Line />,
      dis: "This free shipping only for selected region",
    },
  ];
  return (
    <div className="footerfeature__container section__padding">
      {footerfeature.map((feature, i) => (
        <Feature feature={feature} key={i} />
      ))}
    </div>
  );
};

const Feature = ({ feature }) => (
  <div className="footerfeature__content">
    {feature.icon}
    <div className="footerfeature__content_text">
      <h6>{feature.name}</h6>
      <p>{feature.dis}</p>
    </div>
  </div>
);

export default Footerfeature;
