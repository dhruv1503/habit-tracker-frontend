"use client";

import Link from "next/link";
import { Check, Focus, Moon, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Navbar */}
      {/* <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">FitMentor</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#support" className="text-gray-600 hover:text-gray-900 transition-colors">
                Support
              </Link>
              <Link
                href="/login"
                className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  AI-Powered Fitness
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Build Habits that
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Stick{" "}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your personalized habit mentor powered by AI. Track, grow, and optimize your
                  health routines with FitMentor.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 text-lg"
                >
                  Get Started Free
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg text-lg hover:bg-gray-100"
                >
                  Watch Demo
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Benefits of FitMentor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI and consistency in building life-changing habits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Boost Energy</h3>
              <p className="text-gray-600">
                Daily nudges and optimized routines to help you feel energetic and motivated.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Moon className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Better Sleep</h3>
              <p className="text-gray-600">
                Track screen time and wind-down habits to improve sleep quality and recovery.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Focus className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Deep Focus</h3>
              <p className="text-gray-600">
                {
                  "Build focus rituals and remove digital distractions using FitMentor's AI focus coach."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
