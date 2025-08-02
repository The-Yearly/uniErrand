import { Clock,Search,DollarSign,Calendar,Eye,Edit,Trash2 } from "lucide-react";
import { useState,useMemo } from "react";
import { Job } from "../[id]/page";
export default function RecentActivity({recentJobs}:{recentJobs:Job[]}){
      const handleJobAction = (action: string, jobId: number): void => {
    console.log(`${action} job with ID: ${jobId}`);

  };
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
   const getStatusConfig = (status: Job["status"]) => {
    const configs = {
      completed: { 
        bg: "bg-emerald-50", 
        text: "text-emerald-700", 
        border: "border-emerald-200",
        dot: "bg-emerald-500"
      },
      "in-progress": { 
        bg: "bg-blue-50", 
        text: "text-blue-700", 
        border: "border-blue-200",
        dot: "bg-blue-500"
      },
      posted: { 
        bg: "bg-amber-50", 
        text: "text-amber-700", 
        border: "border-amber-200",
        dot: "bg-amber-500"
      },
      pending: { 
        bg: "bg-gray-50", 
        text: "text-gray-700", 
        border: "border-gray-200",
        dot: "bg-gray-500"
      },
    };
    return configs[status] || configs.pending;
  };

  const getUrgencyColor = (urgency: Job["urgency"]): string => {
    const colors = {
      high: "border-l-red-400 bg-red-50",
      normal: "border-l-blue-400 bg-blue-50",
      low: "border-l-green-400 bg-green-50",
    };
    return colors[urgency] || colors.normal;
  };

        const filteredJobs = useMemo(() => {
    return recentJobs.filter((job: Job) => {
      const matchesFilter = activeFilter === "all" || job.status === activeFilter;
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);
    return(
                        <div className="xl:col-span-2">
                  <article className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 h-full">
                    <header className="p-6 border-b border-gray-200/50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                          <Clock className="w-5 h-5 text-blue-500" />
                          Recent Activity
                        </h2>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              type="text"
                              placeholder="Search jobs..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/70 backdrop-blur-sm"
                            />
                          </div>
                          <select
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/70 backdrop-blur-sm"
                          >
                            <option value="all">All Status</option>
                            <option value="completed">Completed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="posted">Posted</option>
                            <option value="pending">Pending</option>
                          </select>
                        </div>
                      </div>
                    </header>
                    <div className="p-6 max-h-80 overflow-y-auto">
                      <div className="space-y-3">
                        {filteredJobs.map((job) => {
                          const statusConfig = getStatusConfig(job.status);
                          return (
                            <div
                              key={job.id}
                              className={`border-l-4 ${getUrgencyColor(job.urgency)} p-4 rounded-r-lg hover:shadow-md transition-all duration-200 group cursor-pointer`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                      {job.title}
                                    </h3>
                                    <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                                      <div className={`w-2 h-2 rounded-full ${statusConfig.dot}`} />
                                      {job.status.replace('-', ' ')}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{job.description}</p>
                                  <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Calendar size={12} />
                                      {job.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <DollarSign size={12} />
                                      ${job.payment}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button 
                                    onClick={() => handleJobAction('view', job.id)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="View job"
                                  >
                                    <Eye size={16} />
                                  </button>
                                  <button 
                                    onClick={() => handleJobAction('edit', job.id)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="Edit job"
                                  >
                                    <Edit size={16} />
                                  </button>
                                  <button 
                                    onClick={() => handleJobAction('delete', job.id)}
                                    className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                                    aria-label="Delete job"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {filteredJobs.length === 0 && (
                          <div className="text-center py-8 text-gray-500">
                            <Clock size={48} className="mx-auto mb-4 opacity-50" />
                            <p>No jobs found matching your criteria.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                </div>
    )
}