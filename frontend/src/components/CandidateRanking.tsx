import { useState } from 'react';
import {
  Search,
  Filter,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Eye,
  Download,
  X,
} from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  position: string;
  location: string;
  experience: string;
  education: string;
  score: number;
  skills: string[];
  email: string;
  phone: string;
  status: 'new' | 'reviewed' | 'shortlisted';
}

export default function CandidateRanking() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const candidates: Candidate[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'Senior React Developer',
      location: 'San Francisco, CA',
      experience: '7 years',
      education: "Master's in Computer Science",
      score: 95,
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
      email: 'sarah.j@email.com',
      phone: '+1 (555) 123-4567',
      status: 'new',
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'Full Stack Engineer',
      location: 'New York, NY',
      experience: '5 years',
      education: "Bachelor's in Software Engineering",
      score: 92,
      skills: ['JavaScript', 'Python', 'Django', 'React', 'Docker'],
      email: 'mchen@email.com',
      phone: '+1 (555) 234-5678',
      status: 'reviewed',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      position: 'Frontend Developer',
      location: 'Austin, TX',
      experience: '4 years',
      education: "Bachelor's in Computer Science",
      score: 88,
      skills: ['Vue.js', 'CSS', 'JavaScript', 'Figma', 'Git'],
      email: 'emily.r@email.com',
      phone: '+1 (555) 345-6789',
      status: 'shortlisted',
    },
    {
      id: '4',
      name: 'David Kim',
      position: 'Backend Developer',
      location: 'Seattle, WA',
      experience: '6 years',
      education: "Master's in Software Engineering",
      score: 90,
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'Redis'],
      email: 'david.k@email.com',
      phone: '+1 (555) 456-7890',
      status: 'new',
    },
    {
      id: '5',
      name: 'Priya Patel',
      position: 'DevOps Engineer',
      location: 'Boston, MA',
      experience: '5 years',
      education: "Bachelor's in Information Technology",
      score: 87,
      skills: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Python'],
      email: 'priya.p@email.com',
      phone: '+1 (555) 567-8901',
      status: 'reviewed',
    },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    const matchesFilter =
      filterStatus === 'all' || candidate.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-secondary';
    if (score >= 80) return 'text-accent';
    return 'text-muted-foreground';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-secondary/10';
    if (score >= 80) return 'bg-accent/10';
    return 'bg-muted/30';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-primary/10 text-primary';
      case 'reviewed':
        return 'bg-accent/10 text-accent';
      case 'shortlisted':
        return 'bg-secondary/10 text-secondary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Candidate Ranking</h1>
          <p className="text-muted-foreground">
            AI-ranked candidates based on job requirements and qualifications
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, position, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex gap-2">
          {['all', 'new', 'reviewed', 'shortlisted'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-3 rounded-xl border transition-all capitalize ${
                filterStatus === status
                  ? 'bg-primary border-primary text-white'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">
                    {candidate.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{candidate.name}</h3>
                  <p className="text-sm text-muted-foreground">{candidate.position}</p>
                </div>
              </div>

              <div className="text-right">
                <div
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium ${getScoreBg(
                    candidate.score
                  )} ${getScoreColor(candidate.score)}`}
                >
                  <Star className="w-4 h-4 fill-current" />
                  {candidate.score}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                {candidate.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Briefcase className="w-4 h-4" />
                {candidate.experience} experience
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4" />
                {candidate.education}
              </div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {candidate.skills.slice(0, 5).map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg bg-muted/50 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
              {candidate.skills.length > 5 && (
                <span className="px-3 py-1 rounded-lg bg-muted/50 text-xs font-medium">
                  +{candidate.skills.length - 5}
                </span>
              )}
            </div>

            {/* Status and Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span
                className={`px-3 py-1 rounded-lg text-xs font-medium capitalize ${getStatusColor(
                  candidate.status
                )}`}
              >
                {candidate.status}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedCandidate(candidate)}
                  className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                  title="View Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
                  title="Download Resume"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Candidate Detail Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Candidate Details</h2>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Profile */}
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {selectedCandidate.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{selectedCandidate.name}</h3>
                  <p className="text-muted-foreground mb-2">
                    {selectedCandidate.position}
                  </p>
                  <div
                    className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium ${getScoreBg(
                      selectedCandidate.score
                    )} ${getScoreColor(selectedCandidate.score)}`}
                  >
                    <Star className="w-4 h-4 fill-current" />
                    Match Score: {selectedCandidate.score}%
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-3">
                <h4 className="font-semibold">Contact Information</h4>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>{selectedCandidate.email}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span>{selectedCandidate.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedCandidate.location}</span>
                </div>
              </div>

              {/* Experience & Education */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Experience</span>
                  </div>
                  <p className="text-muted-foreground">{selectedCandidate.experience}</p>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Education</span>
                  </div>
                  <p className="text-muted-foreground">{selectedCandidate.education}</p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="font-semibold mb-3">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all">
                  Shortlist Candidate
                </button>
                <button className="flex-1 py-3 rounded-xl border border-border hover:bg-card transition-all">
                  Schedule Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
