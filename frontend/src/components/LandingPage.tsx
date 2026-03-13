import { Link } from 'react-router-dom';
import { Sparkles, Target, BarChart3, Shield, Users, TrendingUp } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FairHire AI
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-xl border border-border hover:bg-card transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/login"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-muted-foreground">AI-Powered Recruitment Platform</span>
            </div>

            <h1 className="text-6xl font-bold max-w-4xl mx-auto leading-tight">
              Hire the Best Talent with{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Zero Bias
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your recruitment process with AI-driven candidate evaluation that eliminates unconscious bias and ensures fair hiring decisions.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link
                to="/login"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all duration-200 shadow-xl shadow-primary/30"
              >
                Start Free Trial
              </Link>
              <button className="px-8 py-4 rounded-xl border border-border hover:bg-card transition-all duration-200">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-sm text-muted-foreground mt-1">Bias Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10x</div>
                <div className="text-sm text-muted-foreground mt-1">Faster Screening</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Companies Trust Us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Powerful Features for Fair Hiring</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a diverse and talented team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary p-12 text-center">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of companies using FairHire AI to build better teams
              </p>
              <Link
                to="/login"
                className="inline-block px-8 py-4 rounded-xl bg-white text-primary font-medium hover:bg-white/90 transition-all duration-200 shadow-xl"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-foreground">FairHire AI</span>
          </div>
          <p>&copy; 2026 FairHire AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Target,
    title: 'AI-Powered Screening',
    description: 'Automatically screen and rank candidates based on skills and qualifications, not demographics.',
  },
  {
    icon: Shield,
    title: 'Bias Detection',
    description: 'Real-time bias detection and mitigation to ensure fair evaluation of all candidates.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into your hiring process with detailed analytics and reports.',
  },
  {
    icon: Users,
    title: 'Candidate Ranking',
    description: 'Smart ranking system that prioritizes the best-fit candidates for your roles.',
  },
  {
    icon: Sparkles,
    title: 'Explainable AI',
    description: 'Transparent AI decisions with detailed explanations for every recommendation.',
  },
  {
    icon: TrendingUp,
    title: 'Diversity Insights',
    description: 'Track and improve diversity metrics across your entire recruitment pipeline.',
  },
];
