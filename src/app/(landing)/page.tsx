import Link from "next/link";
import { Check } from "lucide-react";
import ParticlesBackground from "@/components/particlesBackground/index";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Particles */}
      <ParticlesBackground />

      {/* Hero + Benefits */}
      <div className="relative z-10">
        {/* Navbar */}

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 h-[100vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  {/* <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    AI-Powered Fitness
                  </span> */}
                  <Badge variant="outline" className="text-sm">
                    AI-Powered Habit Tracking
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Build Habits that
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      {" "}
                      Stick{" "}
                    </span>
                  </h1>
                  <p className="text-xl text-white leading-relaxed">
                    Your personalized habit mentor powered by AI. Track, grow, and optimize your
                    health routines.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button variant="outline" size="lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button variant="outline" size="lg">
                      Watch Demo
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-6 text-sm text-white">
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
      </div>
    </div>
  );
}
