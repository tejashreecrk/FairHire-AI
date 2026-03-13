import { useState } from 'react';
import {
  Lightbulb,
  Brain,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Star,
  Code,
  FileText,
  Award,
  Target,
  Briefcase,
  GraduationCap,
  Users,
} from 'lucide-react';

interface Decision {
  id: string;
  candidate: string;
  position: string;
  score: number;
  decision: 'recommended' | 'review' | 'rejected';
  timestamp: string;
}

export default function Explainability() {
  const [selectedDecision, setSelectedDecision] = useState<Decision | null>(null);

  const decisions: Decision[] = [
    {
      id: '1',
      candidate: 'Sarah Johnson',
      position: 'Senior React Developer',
      score: 95,
      decision: 'recommended',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      candidate: 'Michael Chen',
      position: 'Full Stack Engineer',
      score: 92,
      decision: 'recommended',
      timestamp: '5 hours ago',
    },
    {
      id: '3',
      candidate: 'Emily Rodriguez',
      position: 'Frontend Developer',
      score: 88,
      decision: 'review',
      timestamp: '1 day ago',
    },
  ];

  const getDecisionColor = (decision: string) => {
    switch (decision) {
      case 'recommended':
        return 'bg-secondary/10 text-secondary';
      case 'review':
        return 'bg-accent/10 text-accent';
      case 'rejected':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getDecisionIcon = (decision: string) => {
    switch (decision) {
      case 'recommended':
        return CheckCircle;
      case 'review':
        return AlertCircle;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">AI Explainability</h1>
        <p className="text-muted-foreground">
          Transparent insights into how AI makes hiring recommendations
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">How FairHire AI Works</h2>
            <p className="text-muted-foreground">
              Our AI uses multiple factors to evaluate candidates fairly and transparently
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map((step, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Decisions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold">Recent AI Decisions</h2>
          {decisions.map((decision) => {
            const DecisionIcon = getDecisionIcon(decision.decision);
            return (
              <button
                key={decision.id}
                onClick={() => setSelectedDecision(decision)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedDecision?.id === decision.id
                    ? 'bg-primary/10 border-primary'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-white">
                      {decision.candidate.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{decision.candidate}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {decision.position}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium capitalize ${getDecisionColor(
                          decision.decision
                        )}`}
                      >
                        <DecisionIcon className="w-3 h-3" />
                        {decision.decision}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {decision.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Decision Explanation */}
        <div className="lg:col-span-2">
          {selectedDecision ? (
            <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  Decision Explanation: {selectedDecision.candidate}
                </h2>
                <p className="text-muted-foreground">{selectedDecision.position}</p>
              </div>

              {/* Overall Score */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Overall Match Score</h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    <span className="text-2xl font-bold">{selectedDecision.score}%</span>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
                    style={{ width: `${selectedDecision.score}%` }}
                  />
                </div>
              </div>

              {/* Factor Breakdown */}
              <div>
                <h3 className="font-semibold mb-4">Decision Factors</h3>
                <div className="space-y-4">
                  {decisionFactors.map((factor, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <factor.icon className="w-4 h-4 text-primary" />
                          <span className="font-medium">{factor.name}</span>
                        </div>
                        <span className="text-sm font-medium">{factor.score}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${factor.color}`}
                          style={{ width: `${factor.score}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">{factor.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Strengths */}
              <div>
                <h3 className="font-semibold mb-4">Key Strengths</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {keyStrengths.map((strength, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-xl bg-secondary/10"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{strength.title}</p>
                        <p className="text-xs text-muted-foreground">{strength.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas for Review */}
              <div>
                <h3 className="font-semibold mb-4">Areas for Review</h3>
                <div className="space-y-3">
                  {areasForReview.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/20"
                    >
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{area.title}</p>
                        <p className="text-xs text-muted-foreground">{area.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Reasoning */}
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">AI Reasoning</h3>
                    <p className="text-sm text-muted-foreground">
                      Based on the analysis, this candidate demonstrates strong technical
                      skills with 7 years of relevant experience in React and TypeScript.
                      The candidate's background aligns well with the senior developer role
                      requirements. Their portfolio shows significant contributions to
                      open-source projects and leadership in previous roles. The AI
                      recommends moving forward with this candidate for an interview.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Decision Selected</h3>
              <p className="text-muted-foreground">
                Select a decision from the list to view detailed AI reasoning
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const workflowSteps = [
  {
    icon: FileText,
    title: 'Resume Parsing',
    description: 'Extract structured data from resumes',
  },
  {
    icon: Target,
    title: 'Skill Matching',
    description: 'Match skills with job requirements',
  },
  {
    icon: Brain,
    title: 'AI Analysis',
    description: 'Evaluate experience and qualifications',
  },
  {
    icon: Award,
    title: 'Fair Scoring',
    description: 'Generate unbiased candidate scores',
  },
];

const decisionFactors = [
  {
    name: 'Technical Skills',
    score: 98,
    color: 'bg-gradient-to-r from-primary to-accent',
    icon: Code,
    explanation:
      'Strong proficiency in React, TypeScript, and related technologies matching job requirements',
  },
  {
    name: 'Experience Level',
    score: 95,
    color: 'bg-gradient-to-r from-secondary to-emerald-400',
    icon: Briefcase,
    explanation: '7 years of relevant experience exceeds the 5+ years requirement',
  },
  {
    name: 'Education',
    score: 92,
    color: 'bg-gradient-to-r from-accent to-orange-500',
    icon: GraduationCap,
    explanation:
      "Master's degree in Computer Science with relevant coursework and certifications",
  },
  {
    name: 'Cultural Fit',
    score: 88,
    color: 'bg-gradient-to-r from-pink-500 to-purple-500',
    icon: Users,
    explanation:
      'Strong alignment with company values and collaborative work style preferences',
  },
];

const keyStrengths = [
  {
    title: 'Advanced React Expertise',
    detail: '5+ years building production React applications',
  },
  {
    title: 'Leadership Experience',
    detail: 'Led teams of 5-8 developers on major projects',
  },
  {
    title: 'Open Source Contributions',
    detail: 'Active contributor to popular React libraries',
  },
  {
    title: 'Strong Communication',
    detail: 'Clear technical writing and presentation skills',
  },
];

const areasForReview = [
  {
    title: 'Limited GraphQL Experience',
    detail: 'Only 6 months of GraphQL usage, may need additional training',
  },
  {
    title: 'Career Gap',
    detail:
      '8-month gap between positions, recommend discussing during interview',
  },
];
