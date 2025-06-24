"use client";

export default function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-24 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"
            />
          ))}
      </div>
    </div>
  );
}