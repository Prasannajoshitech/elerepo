"use client";

import type React from "react";

import { useState } from "react";
import {
  Building2,
  LandPlot,
  BarChart3,
  Target,
  School,
  Building,
  Hospital,
  ShoppingCart,
} from "lucide-react";

export default function CategoryChat() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: "नागरिक वडापत्र विभाग" },
    { id: 1, name: "आकस्मिक सेवा" },
    { id: 2, name: "अन्य" },
  ];

  return (
    <div className="px-2">
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-4 mb-8 text-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-orange-500 text-orange-700"
                : "border-b-2 border-slate-300 text-slate-600 hover:text-slate-900"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Public Works Department */}
            <ServiceCard
              icon={<Building2 className="h-12 w-12 text-red-500" />}
              title="सार्वजनिक निर्माण विभाग"
            />

            {/* Disaster Management */}
            <ServiceCard
              icon={<LandPlot className="h-12 w-12 text-red-500" />}
              title="विपद व्यवस्थापन विभाग"
            />

            {/* Revenue Department */}
            <ServiceCard
              icon={<BarChart3 className="h-12 w-12 text-red-500" />}
              title="राजस्व विभाग"
            />

            {/* Cooperative Department */}
            <ServiceCard
              icon={<Target className="h-12 w-12 text-red-500" />}
              title="सहकारी विभाग"
            />

            {/* Education Department */}
            <ServiceCard
              icon={<School className="h-12 w-12 text-red-500" />}
              title="शिक्षा विभाग"
            />

            {/* Ward Office */}
            <ServiceCard
              icon={<Building className="h-12 w-12 text-red-500" />}
              title="वडा कार्यालय-नागरिक वडापत्र"
            />

            {/* Health Department */}
            <ServiceCard
              icon={<Hospital className="h-12 w-12 text-red-500" />}
              title="स्वास्थ्य विभाग"
            />
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Placeholder emergency services */}
            <ServiceCard
              icon={<Hospital className="h-12 w-12 text-red-500" />}
              title="आपातकालीन चिकित्सा"
            />
            <ServiceCard
              icon={<Building className="h-12 w-12 text-red-500" />}
              title="अग्नि सेवा"
            />
            <ServiceCard
              icon={<Target className="h-12 w-12 text-red-500" />}
              title="पुलिस सेवा"
            />
            <ServiceCard
              icon={<LandPlot className="h-12 w-12 text-red-500" />}
              title="आपदा राहत"
            />
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* Placeholder other services */}
            <ServiceCard
              icon={<Building2 className="h-12 w-12 text-red-500" />}
              title="पर्यटन विभाग"
            />
            <ServiceCard
              icon={<BarChart3 className="h-12 w-12 text-red-500" />}
              title="कृषि विभाग"
            />
            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12 text-red-500" />}
              title="उद्योग विभाग"
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <button className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-slate-100 transition-colors">
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <div className="text-sm font-medium">{title}</div>
    </button>
  );
}
