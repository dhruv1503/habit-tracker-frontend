import progressData from "@/data/progress.json";

// type TaskStatus = "✅ Done" | "🟡 In Progress" | "🧠 Planned";

const statusMap: Record<string, { label: string; color: string }> = {
  done: { label: "✅ Done", color: "bg-green-100 border-green-400" },
  in_progress: { label: "🟡 In Progress", color: "bg-yellow-100 border-yellow-400" },
  planned: { label: "🧠 Planned", color: "bg-gray-100 border-gray-400" },
};

export default function ProgressPage() {
  return (
    <main className="min-h-screen px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">📊 Project Progress</h1>
      <ul className="space-y-4">
        {progressData.tasks.map((task, index) => {
          const status = statusMap[task.status] || statusMap["planned"];
          return (
            <li key={index} className={`p-4 rounded-lg shadow-sm border ${status.color}`}>
              <span className="text-lg">{status.label}</span> —{" "}
              <span className="font-medium">{task.task}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
