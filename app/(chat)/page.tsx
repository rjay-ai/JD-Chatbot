'use client';
import Link from 'next/link';
import { FileText, GanttChartSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">AI Job Description Tool</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Generate JD Card */}
          <Link href="/generate">
            <div className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-200">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Generate JD</h2>
              </div>
              <p className="text-gray-600">
                Create professional job descriptions with AI assistance. Input your requirements and get a well-structured JD.
              </p>
            </div>
          </Link>

          {/* Compare JDs Card */}
          <Link href="/compare">
            <div className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer border border-gray-200">
              <div className="flex items-center mb-4">
                <GanttChartSquare className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">Compare JDs</h2>
              </div>
              <p className="text-gray-600">
                Compare two job descriptions to analyze differences in responsibilities, requirements, and seniority levels.
              </p>
            </div>
          </Link>
        </div>

        {/* Example Boxes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Generate JD Example</h3>
            <p className="text-sm text-gray-600">
              "Create a job description for a Senior Software Engineer with 5+ years of experience in cloud technologies"
            </p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Compare JDs Example</h3>
            <p className="text-sm text-gray-600">
              "Compare two Software Engineer positions to understand differences in seniority and requirements"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
