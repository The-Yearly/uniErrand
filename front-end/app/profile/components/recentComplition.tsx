import { Award } from "lucide-react";
import { CompletedJob, renderStars } from "../[id]/page";
export default function RecentComplition({
  completedJobs,
}: {
  completedJobs: CompletedJob[];
}) {
  return (
    <section>
      <article className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
        <header className="p-6 border-b border-gray-200/50">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <Award className="w-5 h-5 text-emerald-500" />
            Recent Completions
          </h2>
        </header>
        <div className="p-6">
          <div className="grid gap-4">
            {completedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-xl border border-emerald-100 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {renderStars(job.rating)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      Client: {job.client}
                    </p>
                    <p className="text-sm text-gray-500 italic">
                      "{job.feedback}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-gray-500">{job.date}</span>
                    <span className="font-bold text-emerald-600 text-lg">
                      ${job.payment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
