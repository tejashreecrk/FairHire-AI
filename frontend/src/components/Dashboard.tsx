import {
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  UserCheck,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your recruitment.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center`}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
                  card.trend === 'up'
                    ? 'bg-secondary/10 text-secondary'
                    : 'bg-destructive/10 text-destructive'
                }`}
              >
                {card.trend === 'up' ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {card.change}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{card.label}</p>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Applications Over Time */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Applications Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={applicationsData}>
              <defs>
                <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="applications"
                stroke="#4F46E5"
                fillOpacity={1}
                fill="url(#colorApplications)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Hiring Pipeline */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Hiring Pipeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pipelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="stage" stroke="#94A3B8" />
              <YAxis stroke="#94A3B8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E293B',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '0.75rem',
                }}
              />
              <Bar dataKey="candidates" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Diversity Distribution */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">Diversity Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={diversityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {diversityData.map((entry, index) => (
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
          <div className="space-y-2 mt-4">
            {diversityData.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-card border border-border rounded-2xl p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activity.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <activity.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const statsCards = [
  {
    label: 'Total Candidates',
    value: '1,247',
    change: '+12%',
    trend: 'up',
    icon: Users,
    gradient: 'from-primary to-accent',
  },
  {
    label: 'Active Jobs',
    value: '18',
    change: '+3%',
    trend: 'up',
    icon: Briefcase,
    gradient: 'from-secondary to-emerald-400',
  },
  {
    label: 'Hired This Month',
    value: '42',
    change: '+18%',
    trend: 'up',
    icon: UserCheck,
    gradient: 'from-accent to-orange-500',
  },
  {
    label: 'Avg. Time to Hire',
    value: '14d',
    change: '-8%',
    trend: 'up',
    icon: Clock,
    gradient: 'from-pink-500 to-purple-500',
  },
];

const applicationsData = [
  { month: 'Jan', applications: 65 },
  { month: 'Feb', applications: 78 },
  { month: 'Mar', applications: 90 },
  { month: 'Apr', applications: 81 },
  { month: 'May', applications: 95 },
  { month: 'Jun', applications: 110 },
];

const pipelineData = [
  { stage: 'Applied', candidates: 245 },
  { stage: 'Screened', candidates: 180 },
  { stage: 'Interview', candidates: 95 },
  { stage: 'Offer', candidates: 42 },
  { stage: 'Hired', candidates: 28 },
];

const diversityData = [
  { name: 'Female', value: 48 },
  { name: 'Male', value: 45 },
  { name: 'Non-Binary', value: 5 },
  { name: 'Not Specified', value: 2 },
];

const COLORS = ['#4F46E5', '#22C55E', '#F59E0B', '#EC4899'];

const recentActivities = [
  {
    icon: Users,
    title: 'New candidate submitted',
    description: 'Sarah Johnson applied for Senior React Developer',
    time: '2 hours ago',
    gradient: 'from-primary to-accent',
  },
  {
    icon: CheckCircle,
    title: 'Interview scheduled',
    description: 'Mike Chen - Technical Interview on March 15',
    time: '4 hours ago',
    gradient: 'from-secondary to-emerald-400',
  },
  {
    icon: TrendingUp,
    title: 'Bias score improved',
    description: 'Overall hiring bias reduced by 15% this week',
    time: '1 day ago',
    gradient: 'from-accent to-orange-500',
  },
  {
    icon: Briefcase,
    title: 'New job posted',
    description: 'Product Manager position is now live',
    time: '2 days ago',
    gradient: 'from-pink-500 to-purple-500',
  },
];
