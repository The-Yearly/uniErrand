"use client";

import {
  Briefcase,
  Pickaxe,
  MessageCircleQuestionIcon as MessageCircleQuestionMark,
  Star,
  StarHalf,
  TrendingUp,
  Clock,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const recentJobs = [
  {
    id: 1,
    title: "Grocery Shopping",
    status: "completed",
    date: "2024-01-15",
    payment: "$25",
  },
  {
    id: 2,
    title: "Dog Walking",
    status: "in-progress",
    date: "2024-01-14",
    payment: "$15",
  },
  {
    id: 3,
    title: "House Cleaning",
    status: "posted",
    date: "2024-01-13",
    payment: "$50",
  },
];

const completedJobs = [
  {
    id: 1,
    title: "Furniture Assembly",
    client: "Sarah M.",
    rating: 4.5,
    payment: "$40",
  },
  {
    id: 2,
    title: "Garden Maintenance",
    client: "Mike R.",
    rating: 4,
    payment: "$35",
  },
  { id: 3, title: "Moving Help", client: "Lisa K.", rating: 5, payment: "$60" },
];

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderStars = (rating: number) => {
    return [1, 2, 3, 4, 5].map((star) =>
      star <= rating ? (
        <Star
          key={star}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ) : rating >= star - 0.5 ? (
        <div className="relative inline-block" key={star}>
          <StarHalf
            size={16}
            className="absolute fill-yellow-400 text-yellow-400"
          />
          <Star size={16} className="text-gray-300" />
        </div>
      ) : (
        <Star key={star} size={16} className="text-gray-300" />
      ),
    );
  };

  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "in-progress":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "posted":
        return "bg-gray-100 text-gray-800 border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="pt-20">
        <div className="flex">
          <aside className="hidden lg:block w-80 bg-white shadow-xl border-r border-white/30 lg:rounded-r-2xl">
            <div className="p-6 flex flex-col h-full">
              <h1 className="text-3xl mt-8 font-bold text-center text-gray-800">
                Dashboard
              </h1>

              <nav className="flex flex-col mt-10 space-y-2">
                <Link
                  href="#"
                  className="flex items-center text-lg gap-4 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900"
                >
                  <Briefcase strokeWidth={1.25} className="w-6 h-6" />
                  <span>Jobs Posted</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-lg gap-4 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900"
                >
                  <Pickaxe strokeWidth={1.25} className="w-6 h-6" />
                  <span>Jobs Completed</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-lg gap-4 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900"
                >
                  <MessageCircleQuestionMark
                    strokeWidth={1.25}
                    className="w-6 h-6"
                  />
                  <span>Reviews</span>
                </Link>
              </nav>
            </div>
          </aside>
          <aside
            className={`
                lg:hidden fixed left-0 z-30 w-80 bg-white shadow-xl border-r border-white/30 
                transform transition-transform duration-300 ease-in-out
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
                top-20 bottom-0
                `}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">
                  Dashboard Menu
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="flex items-center text-lg gap-4 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase strokeWidth={1.25} className="w-6 h-6" />
                  <span>Jobs Posted</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-lg gap-4 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Pickaxe strokeWidth={1.25} className="w-6 h-6" />
                  <span>Jobs Completed</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center text-lg gap-4 px-4 py-3 rounded-lg transition-all hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <MessageCircleQuestionMark
                    strokeWidth={1.25}
                    className="w-6 h-6"
                  />
                  <span>Reviews</span>
                </Link>
              </nav>
            </div>
          </aside>

          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-opacity-50 z-20"
              style={{ top: "80px" }}
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}

          <main className="flex-1 lg:ml-80 p-4 lg:p-8">
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border hover:bg-gray-50 transition-colors"
              >
                <Menu size={20} />
                <span>Dashboard Menu</span>
              </button>
            </div>

            <div className="max-w-7xl mx-auto">
              <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                <article className="bg-white rounded-lg shadow-md border border-gray-200">
                  <div className="p-4 lg:p-6">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <Image
                        src="/placeholder.svg?height=120&width=120"
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg object-cover mx-auto sm:mx-0"
                        alt="Profile picture"
                        width={120}
                        height={120}
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-900">
                          John Yohan
                        </h2>
                        <p className="text-gray-600">
                          @
                          <Link
                            href="/"
                            className="hover:text-sky-500 transition-colors"
                          >
                            TheYearly
                          </Link>
                        </p>

                        <div className="flex items-center justify-center sm:justify-start mt-2 gap-1">
                          {renderStars(4.8)}
                          <span className="ml-2 text-sm text-gray-500">
                            {(4.8).toFixed(1)} / 5
                          </span>
                        </div>

                        <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md transition-colors w-full sm:w-auto">
                          Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg shadow-md border border-gray-200">
                  <header className="p-4 lg:p-6 border-b border-gray-200">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <TrendingUp className="w-5 h-5" />
                      <span>Quick Overview</span>
                    </h2>
                  </header>
                  <div className="p-4 lg:p-6">
                    <div className="grid grid-cols-2 gap-3 lg:gap-4">
                      <div className="text-center p-3 lg:p-4 bg-blue-50 rounded-lg">
                        <p className="text-xl lg:text-2xl font-bold text-blue-600">
                          12
                        </p>
                        <p className="text-xs lg:text-sm text-gray-600">
                          Jobs Posted
                        </p>
                      </div>
                      <div className="text-center p-3 lg:p-4 bg-green-50 rounded-lg">
                        <p className="text-xl lg:text-2xl font-bold text-green-600">
                          8
                        </p>
                        <p className="text-xs lg:text-sm text-gray-600">
                          Completed
                        </p>
                      </div>
                      <div className="text-center p-3 lg:p-4 bg-yellow-50 rounded-lg">
                        <p className="text-xl lg:text-2xl font-bold text-yellow-600">
                          $340
                        </p>
                        <p className="text-xs lg:text-sm text-gray-600">
                          Total Earned
                        </p>
                      </div>
                      <div className="text-center p-3 lg:p-4 bg-purple-50 rounded-lg">
                        <p className="text-xl lg:text-2xl font-bold text-purple-600">
                          4.8
                        </p>
                        <p className="text-xs lg:text-sm text-gray-600">
                          Avg Rating
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </section>

              <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <article className="bg-white rounded-lg shadow-md border border-gray-200">
                  <header className="p-4 lg:p-6 border-b border-gray-200">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <Clock className="w-5 h-5" />
                      <span>Recent Activity</span>
                    </h2>
                  </header>
                  <div className="p-4 lg:p-6">
                    <div className="space-y-3 lg:space-y-4">
                      {recentJobs.map((job) => (
                        <div
                          key={job.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2 sm:gap-0"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                              {job.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-gray-500">
                              {job.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 justify-between sm:justify-end">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusBadgeClasses(job.status)}`}
                            >
                              {job.status}
                            </span>
                            <span className="font-medium text-green-600 text-sm lg:text-base">
                              {job.payment}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-lg shadow-md border border-gray-200">
                  <header className="p-4 lg:p-6 border-b border-gray-200">
                    <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                      <CheckCircle className="w-5 h-5" />
                      <span>Recent Completions</span>
                    </h2>
                  </header>
                  <div className="p-4 lg:p-6">
                    <div className="space-y-3 lg:space-y-4">
                      {completedJobs.map((job) => (
                        <div
                          key={job.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2 sm:gap-0"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                              {job.title}
                            </h3>
                            <p className="text-xs lg:text-sm text-gray-500">
                              Client: {job.client}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 justify-between sm:justify-end">
                            <div className="flex gap-0.5">
                              {renderStars(job.rating)}
                            </div>
                            <span className="font-medium text-green-600 text-sm lg:text-base">
                              {job.payment}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
