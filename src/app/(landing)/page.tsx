// pages/index.tsx
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800">
      {/* Hero */}
      <section className="text-center px-6 py-16 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Build habits that stick with AI
        </h1>
        <p className="max-w-xl mx-auto text-lg sm:text-xl mb-6">
          Our AI-powered habit tracker helps you build and maintain healthy habits, tailored to your
          unique needs and goals.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              title: "AI-Powered Personalization",
              desc: "AI analyzes your behavior and provides personalized recommendations to optimize habit formation.",
            },
            {
              title: "Goal Setting and Tracking",
              desc: "Set SMART goals and track progress to stay motivated.",
            },
            {
              title: "Flexible Scheduling",
              desc: "Create daily, weekly, or custom schedules that fit your lifestyle.",
            },
            {
              title: "Reminders and Notifications",
              desc: "Timely reminders to help you stay consistent.",
            },
          ].map((f, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">How it works</h2>
        <div className="space-y-10 max-w-4xl mx-auto">
          {[
            {
              title: "Personalized Habit Plans",
              desc: "AI creates plans based on your goals and progress.",
            },
            {
              title: "Stay on Track",
              desc: "Timely reminders and visual progress tracking.",
            },
            {
              title: "Celebrate Your Success",
              desc: "Celebrate milestones as you build better habits.",
            },
          ].map((step, i) => (
            <div key={i} className="p-4 sm:p-6">
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Basic",
              price: "Free",
              features: ["Unlimited habits", "Basic analytics", "Community support"],
              cta: "Get Started",
            },
            {
              title: "Premium",
              price: "$9.99/month",
              features: [
                "All Basic features",
                "Advanced analytics",
                "Personalized coaching",
                "Priority support",
              ],
              cta: "Upgrade",
              highlight: true,
            },
            {
              title: "Family",
              price: "$14.99/month",
              features: [
                "All Premium features",
                "Up to 5 family members",
                "Shared progress tracking",
              ],
              cta: "Upgrade",
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-6 border rounded-xl ${plan.highlight ? "border-blue-600 shadow-lg" : "shadow-sm"}`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-2xl mb-4">{plan.price}</p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600">
                {plan.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8 bg-gray-100">
        <p>© 2025 Habit AI. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Contact Us</Link>
        </div>
      </footer>
    </main>
  );
}
