"use client";

import {
  Briefcase,
  MessageCircleQuestion,
  Star,
  StarHalf,
  TrendingUp,
  CheckCircle,
  Menu,
  X,
  Users,
  Bell,
  Settings,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { useState } from "react";
import RecentActivity from "../components/recentActivity";
import RecentComplition from "../components/recentComplition";
import UiCard from "../components/uiCard";
export const renderStars = (rating: number) => {
  return [1, 2, 3, 4, 5].map((star: number) =>
    star <= rating ? (
      <Star key={star} size={14} className="fill-yellow-400 text-yellow-400" />
    ) : rating >= star - 0.5 ? (
      <div className="relative inline-block" key={star}>
        <StarHalf
          size={14}
          className="absolute fill-yellow-400 text-yellow-400"
        />
        <Star size={14} className="text-gray-300" />
      </div>
    ) : (
      <Star key={star} size={14} className="text-gray-300" />
    ),
  );
};
export interface Job {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "posted" | "pending";
  date: string;
  payment: number;
  description: string;
  urgency: "high" | "normal" | "low";
}

export interface CompletedJob {
  id: number;
  title: string;
  client: string;
  rating: number;
  payment: number;
  date: string;
  feedback: string;
}

interface StatData {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  color: "blue" | "green" | "yellow" | "purple";
}

interface NavigationItem {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  key: string;
}

const recentJobs: Job[] = [
  {
    id: 1,
    title: "Grocery Shopping",
    status: "completed",
    date: "2024-01-15",
    payment: 25,
    description: "Weekly grocery shopping for elderly client",
    urgency: "normal",
  },
  {
    id: 2,
    title: "Dog Walking",
    status: "in-progress",
    date: "2024-01-14",
    payment: 15,
    description: "Daily walk for Golden Retriever",
    urgency: "high",
  },
  {
    id: 3,
    title: "House Cleaning",
    status: "posted",
    date: "2024-01-13",
    payment: 50,
    description: "Deep cleaning of 2-bedroom apartment",
    urgency: "normal",
  },
  {
    id: 4,
    title: "Furniture Assembly",
    status: "pending",
    date: "2024-01-12",
    payment: 40,
    description: "IKEA furniture assembly service",
    urgency: "low",
  },
];

const completedJobs: CompletedJob[] = [
  {
    id: 1,
    title: "Furniture Assembly",
    client: "Sarah M.",
    rating: 4.5,
    payment: 40,
    date: "2024-01-10",
    feedback: "Great work, very professional!",
  },
  {
    id: 2,
    title: "Garden Maintenance",
    client: "Mike R.",
    rating: 4,
    payment: 35,
    date: "2024-01-08",
    feedback: "Good job, will hire again.",
  },
  {
    id: 3,
    title: "Moving Help",
    client: "Lisa K.",
    rating: 5,
    payment: 60,
    date: "2024-01-05",
    feedback: "Excellent service, highly recommended!",
  },
];

const statsData: StatData[] = [
  {
    title: "Jobs Posted",
    value: "12",
    change: "+2",
    trend: "up",
    color: "blue",
  },
  { title: "Completed", value: "8", change: "+1", trend: "up", color: "green" },
  {
    title: "Total Earned",
    value: "$340",
    change: "+$85",
    trend: "up",
    color: "yellow",
  },
  {
    title: "Avg Rating",
    value: "4.8",
    change: "+0.2",
    trend: "up",
    color: "purple",
  },
];

const Dashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const [activeSection, setActiveSection] = useState<string>("overview");

  const StatCard: React.FC<{ stat: StatData }> = ({ stat }) => {
    const colorConfig = {
      blue: {
        bg: "bg-gradient-to-br from-blue-50 to-blue-100",
        text: "text-blue-600",
        icon: "text-blue-500",
      },
      green: {
        bg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        text: "text-emerald-600",
        icon: "text-emerald-500",
      },
      yellow: {
        bg: "bg-gradient-to-br from-amber-50 to-amber-100",
        text: "text-amber-600",
        icon: "text-amber-500",
      },
      purple: {
        bg: "bg-gradient-to-br from-purple-50 to-purple-100",
        text: "text-purple-600",
        icon: "text-purple-500",
      },
    };

    const config = colorConfig[stat.color];

    return (
      <div
        className={`${config.bg} rounded-xl p-4 border border-white/50 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group`}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-600">{stat.title}</p>
          <div
            className={`flex items-center gap-1 ${config.icon} group-hover:scale-110 transition-transform`}
          >
            {stat.trend === "up" ? (
              <ArrowUpRight size={16} />
            ) : (
              <ArrowDownRight size={16} />
            )}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <p className={`text-2xl font-bold ${config.text}`}>{stat.value}</p>
          <p className={`text-xs font-medium ${config.text} opacity-75`}>
            {stat.change}
          </p>
        </div>
      </div>
    );
  };

  const navigationItems: NavigationItem[] = [
    { icon: Briefcase, label: "Jobs Posted", key: "jobs" },
    { icon: CheckCircle, label: "Completed", key: "completed" },
    { icon: MessageCircleQuestion, label: "Reviews", key: "reviews" },
    { icon: TrendingUp, label: "Analytics", key: "analytics" },
  ];

  const handleSectionChange = (section: string): void => {
    setActiveSection(section);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/50">
      <div className="pt-6">
        <div className="flex">
          <aside className="hidden lg:block w-72 bg-white/80 backdrop-blur-md shadow-xl border-r border-white/50 lg:rounded-r-3xl mx-4 my-2">
            <div className="p-6 flex flex-col h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your gigs</p>
              </div>

              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleSectionChange(item.key)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group ${
                        activeSection === item.key
                          ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                          : "hover:bg-gray-50 text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <IconComponent
                        size={20}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <button
                  onClick={() => console.log("Settings clicked")}
                  className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-gray-50 text-gray-600 hover:text-gray-900 transition-all group"
                >
                  <Settings
                    size={20}
                    className="group-hover:rotate-90 transition-transform duration-300"
                  />
                  <span className="font-medium">Settings</span>
                </button>
              </div>
            </div>
          </aside>
          <aside
            className={`lg:hidden fixed left-0 z-30 w-80 bg-white/95 backdrop-blur-md shadow-2xl border-r border-white/50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} top-0 bottom-0`}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.key}
                      onClick={() => handleSectionChange(item.key)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                        activeSection === item.key
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          <main className="flex-1 lg:ml-0 p-4 lg:p-6">
            <div className="lg:hidden mb-6 flex items-center justify-between">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 hover:bg-white/90 transition-all"
                aria-label="Open menu"
              >
                <Menu size={20} />
                <span className="font-medium">Menu</span>
              </button>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 hover:bg-white/90 transition-all relative"
                  aria-label="Notifications"
                >
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                </button>
                <button
                  className="p-2 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 hover:bg-white/90 transition-all"
                  aria-label="Settings"
                >
                  <Settings size={20} />
                </button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Welcome back, John! 👋
                </h1>
                <p className="text-gray-600">
                  Here's what's happening with your gigs today.
                </p>
              </div>
              <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {statsData.map((stat, index) => (
                  <StatCard key={index} stat={stat} />
                ))}
              </section>
              <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
                <div className="xl:col-span-1">
                  <UiCard />
                </div>
                <RecentActivity recentJobs={recentJobs} />
              </section>
              <RecentComplition completedJobs={completedJobs} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
