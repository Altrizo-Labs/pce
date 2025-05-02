"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import clsx from "clsx";

const pricingData = {
  monthly: [
    {
      name: "Free",
      price: "$0",
      subText: "Per user/month, billed monthly",
      description: "For your hobby projects",
      features: [
        "Free e-mail alerts",
        "3-minute checks",
        "Automatic data enrichment",
        "10 monitors",
        "Up to 3 seats",
      ],
    },
    {
      name: "Pro",
      price: "$45",
      subText: "Per user/month, billed monthly",
      badge: "Popular",
      description: "For multiple teams",
      features: [
        "Everything in Free",
        "Up to 5 team members",
        "100 monitors",
        "15 status pages",
        "200+ integrations",
      ],
    },
    {
      name: "Pro 02",
      price: "$85",
      subText: "Per user/month, billed monthly",
      description: "Great for small businesses",
      features: [
        "Unlimited phone calls",
        "30 second checks",
        "Single-user account",
        "20 monitors",
        "Up to 6 seats",
      ],
    },
  ],
  annual: [
    {
      name: "Free",
      price: "$0",
      subText: "Per user/month, billed annually",
      description: "For your hobby projects",
      features: [
        "Free e-mail alerts",
        "3-minute checks",
        "Automatic data enrichment",
        "10 monitors",
        "Up to 3 seats",
      ],
    },
    {
      name: "Pro",
      price: "$39",
      subText: "Per user/month, billed annually",
      badge: "Popular",
      description: "For multiple teams",
      features: [
        "Everything in Free",
        "Up to 5 team members",
        "100 monitors",
        "15 status pages",
        "200+ integrations",
      ],
    },
    {
      name: "Pro 02",
      price: "$75",
      subText: "Per user/month, billed annually",
      description: "Great for small businesses",
      features: [
        "Unlimited phone calls",
        "30 second checks",
        "Single-user account",
        "20 monitors",
        "Up to 6 seats",
      ],
    },
  ],
};

const Pricing = () => {
  const [activePlan, setActivePlan] = useState<"monthly" | "annual">("monthly");

  const cards = pricingData[activePlan];

  return (
    <div className="bg-white text-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-300 font-ibm-plex">
      <div className="max-w-[60rem] mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-lato font-bold text-center mb-8 md:mb-10">
          Affordable Plans to Power Your Institution’s Growth
        </h2>

        {/* Toggle */}
        <div className="flex justify-center mb-8 md:mb-10 space-x-4">
          <button
            onClick={() => setActivePlan("monthly")}
            className={clsx(
              "px-6 py-2 rounded-full font-normal transition",
              activePlan === "monthly"
                ? "bg-[#1E3A8A] text-white"
                : "border border-[#1E3A8A] text-primary "
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setActivePlan("annual")}
            className={clsx(
              "px-6 py-2 rounded-full font-normal transition",
              activePlan === "annual"
                ? "bg-[#1E3A8A] text-white"
                : "border border-[#1E3A8A] text-[#1E3A8A]"
            )}
          >
            Annually
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={clsx(
                "rounded-xl p-4 sm:p-6 flex flex-col justify-between min-h-[500px] sm:min-h-[530px] md:min-h-[560px] w-full max-w-sm md:max-w-[275px] lg:max-w-xs shadow-lg border",
                card.name === "Pro"
                  ? "bg-[#1E3A8A] text-white border-blue-800"
                  : "bg-white text-black border-gray-200"
              )}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-medium">{card.name}</h3>
                  {card.badge && (
                    <span className="bg-white/20 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      🔥 {card.badge}
                    </span>
                  )}
                </div>
                <p className="text-3xl sm:text-4xl font-medium mb-1 font-lato">{card.price}</p>
                <p
                  className={clsx(
                    "text-sm mb-4",
                    card.name === "Pro" ? "text-blue-200" : "text-gray-500"
                  )}
                >
                  {card.subText}
                </p>
                <p className="font-medium mb-4">{card.description}</p>
                <ul
                  className={clsx(
                    "space-y-2 text-sm mb-4 sm:mb-6",
                    card.name === "Pro" ? "text-blue-100" : "text-gray-700"
                  )}
                >
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span
                        className={clsx(
                          "p-1 rounded-md mr-1 sm:mr-2 inline-flex items-center justify-center",
                          card.name === "Pro"
                            ? "bg-white/20 text-white/70"
                            : "bg-gray-100 text-gray-600"
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={clsx(
                  "py-2 px-4 rounded-full font-semibold transition w-full font-lato",
                  card.name === "Pro"
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                )}
              >
                {card.name === "Free"
                  ? "Get started for free"
                  : `Get started with ${card.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
