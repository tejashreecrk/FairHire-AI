import {
  Shield,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Users,
  Award,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

export default function BiasAnalytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Bias Analytics</h1>
        <p className="text-muted-foreground">
          Monitor and analyze bias metrics across your recruitment process
        </p>
      </div>

      {/* Bias Score Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {biasScores.map((item, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  item.status === 'good'
                    ? 'bg-secondary/10 text-secondary'
                    : item.status === 'warning'
                    ? 'bg-accent/10 text-accent'
                    : 'bg-destructive/10 text-destructive'
                }`}
              >
                {item.status}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
            <p className="text-3xl font-bold mb-1">{item.value}</p>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bias Trend Over Time */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Bias Reduction Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={biasTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '0.75rem',
                }}
              />
              <Line
                type="monotone"
                dataKey="biasScore"
                stroke="#22C55E"
                strokeWidth={3}
                dot={{ fill: '#22C55E', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gender Distribution */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '0.75rem',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bias by Category */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Bias by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={biasCategoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="category" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '0.75rem',
                }}
              />
              <Bar dataKey="score" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Fairness Metrics Radar */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Fairness Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={fairnessData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="metric" stroke="#94A3B8" />
              <PolarRadiusAxis stroke="#94A3B8" />
              <Radar
                name="Current"
                dataKey="current"
                stroke="#4F46E5"
                fill="#4F46E5"
                fillOpacity={0.6}
              />
              <Radar
                name="Target"
                dataKey="target"
                stroke="#22C55E"
                fill="#22C55E"
                fillOpacity={0.3}
              />
              <Legend />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '0.75rem',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-secondary">Low Bias Detected</h3>
              <p className="text-sm text-muted-foreground">
                Your current hiring process shows minimal bias across all categories. Keep
                up the great work!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-accent">Areas to Improve</h3>
              <p className="text-sm text-muted-foreground">
                Consider reviewing the screening process for age-related bias patterns.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-primary">Best Practice</h3>
              <p className="text-sm text-muted-foreground">
                Your diversity metrics exceed industry standards by 23%.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">AI Recommendations</h3>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${rec.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
              >
                <rec.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium mb-1">{rec.title}</h4>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-lg bg-primary/10 text-primary font-medium whitespace-nowrap">
                {rec.priority}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const biasScores = [
  {
    label: 'Overall Bias Score',
    value: '8.2%',
    description: 'Well below industry average',
    status: 'good',
    icon: Shield,
    gradient: 'from-secondary to-emerald-400',
  },
  {
    label: 'Gender Bias',
    value: '4.5%',
    description: 'Excellent balance',
    status: 'good',
    icon: Users,
    gradient: 'from-primary to-accent',
  },
  {
    label: 'Age Bias',
    value: '12.3%',
    description: 'Needs attention',
    status: 'warning',
    icon: AlertTriangle,
    gradient: 'from-accent to-orange-500',
  },
  {
    label: 'Improvement',
    value: '-15%',
    description: 'Last 30 days',
    status: 'good',
    icon: TrendingDown,
    gradient: 'from-pink-500 to-purple-500',
  },
];

const biasTrendData = [
  { month: 'Jan', biasScore: 23 },
  { month: 'Feb', biasScore: 19 },
  { month: 'Mar', biasScore: 16 },
  { month: 'Apr', biasScore: 12 },
  { month: 'May', biasScore: 10 },
  { month: 'Jun', biasScore: 8.2 },
];

const genderData = [
  { name: 'Female', value: 48 },
  { name: 'Male', value: 47 },
  { name: 'Non-Binary', value: 4 },
  { name: 'Other', value: 1 },
];

const biasCategoryData = [
  { category: 'Gender', score: 4.5 },
  { category: 'Age', score: 12.3 },
  { category: 'Ethnicity', score: 6.7 },
  { category: 'Education', score: 7.2 },
  { category: 'Location', score: 5.8 },
];

const fairnessData = [
  { metric: 'Diversity', current: 92, target: 95 },
  { metric: 'Equity', current: 88, target: 90 },
  { metric: 'Inclusion', current: 85, target: 95 },
  { metric: 'Accessibility', current: 78, target: 85 },
  { metric: 'Transparency', current: 94, target: 95 },
];

const COLORS = ['#4F46E5', '#22C55E', '#F59E0B', '#EC4899'];

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-sm font-medium"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const recommendations = [
  {
    icon: Shield,
    title: 'Implement Blind Resume Screening',
    description:
      'Remove identifying information from resumes during initial screening to reduce unconscious bias.',
    priority: 'High',
    color: 'from-primary to-accent',
  },
  {
    icon: Users,
    title: 'Diversify Interview Panels',
    description:
      'Ensure interview panels include diverse perspectives to minimize groupthink and bias.',
    priority: 'Medium',
    color: 'from-secondary to-emerald-400',
  },
  {
    icon: CheckCircle,
    title: 'Review Age-Related Keywords',
    description:
      'Update job descriptions to remove age-biased language and requirements.',
    priority: 'High',
    color: 'from-accent to-orange-500',
  },
];
