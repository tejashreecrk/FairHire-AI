import { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Key,
  Mail,
  Building,
  CreditCard,
  Save,
  CheckCircle,
} from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Settings Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-2xl p-2 space-y-1">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'appearance' && <AppearanceSettings />}
            {activeTab === 'company' && <CompanySettings />}
            {activeTab === 'billing' && <BillingSettings />}

            {/* Save Button */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              {saveSuccess && (
                <div className="flex items-center gap-2 text-secondary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">Settings saved successfully!</span>
                </div>
              )}
              {!saveSuccess && <div />}
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/30"
              >
                <div className="flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  Save Changes
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Profile Settings</h2>
        <p className="text-sm text-muted-foreground">
          Update your personal information and profile details
        </p>
      </div>

      {/* Profile Picture */}
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-2xl font-bold text-white">JD</span>
        </div>
        <div>
          <button className="px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium">
            Change Photo
          </button>
          <p className="text-xs text-muted-foreground mt-1">
            JPG, PNG or GIF. Max size 2MB.
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">First Name</label>
          <input
            type="text"
            defaultValue="John"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Last Name</label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            defaultValue="john.doe@company.com"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Job Title</label>
          <input
            type="text"
            defaultValue="Senior Recruiter"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Bio</label>
          <textarea
            rows={4}
            defaultValue="Passionate about finding the best talent and creating diverse teams."
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Notification Settings</h2>
        <p className="text-sm text-muted-foreground">
          Configure how you receive notifications and updates
        </p>
      </div>

      <div className="space-y-4">
        {notificationOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-4 rounded-xl bg-muted/30"
          >
            <div className="flex items-start gap-3">
              <option.icon className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={option.enabled} className="sr-only peer" />
              <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Security Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your password and security preferences
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Current Password</label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="bg-muted/30 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium mb-1">Two-Factor Authentication</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Add an extra layer of security to your account
            </p>
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition-all">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Appearance Settings</h2>
        <p className="text-sm text-muted-foreground">
          Customize the look and feel of your dashboard
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-3 block">Theme</label>
          <div className="grid grid-cols-3 gap-4">
            {['Dark', 'Light', 'Auto'].map((theme) => (
              <button
                key={theme}
                className={`p-4 rounded-xl border-2 transition-all ${
                  theme === 'Dark'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="w-full h-20 rounded-lg bg-gradient-to-br from-muted to-card mb-2" />
                <p className="text-sm font-medium">{theme}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Accent Color</label>
          <div className="flex gap-3">
            {['#4F46E5', '#22C55E', '#F59E0B', '#EC4899', '#8B5CF6'].map((color) => (
              <button
                key={color}
                className={`w-12 h-12 rounded-xl border-2 transition-all ${
                  color === '#4F46E5' ? 'border-white' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Company Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your company information and branding
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Company Name</label>
          <input
            type="text"
            defaultValue="Acme Corporation"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Industry</label>
          <select className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
            <option>Technology</option>
            <option>Finance</option>
            <option>Healthcare</option>
            <option>Education</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Company Size</label>
          <select className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-500</option>
            <option>500+</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Website</label>
          <input
            type="url"
            defaultValue="https://acme.com"
            className="w-full px-4 py-3 rounded-xl bg-input-background border border-input focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

function BillingSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Billing Settings</h2>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and payment methods
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Professional Plan</h3>
            <p className="text-sm text-muted-foreground">Billed monthly</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">$99</p>
            <p className="text-sm text-muted-foreground">/month</p>
          </div>
        </div>
        <button className="px-4 py-2 rounded-lg border border-border hover:bg-card transition-colors text-sm font-medium">
          Change Plan
        </button>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="font-semibold mb-3">Payment Method</h3>
        <div className="bg-muted/30 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-muted-foreground">Expires 12/2026</p>
            </div>
          </div>
          <button className="px-4 py-2 rounded-lg border border-border hover:bg-card transition-colors text-sm font-medium">
            Update
          </button>
        </div>
      </div>

      {/* Billing History */}
      <div>
        <h3 className="font-semibold mb-3">Billing History</h3>
        <div className="space-y-2">
          {[
            { date: 'Mar 1, 2026', amount: '$99.00', status: 'Paid' },
            { date: 'Feb 1, 2026', amount: '$99.00', status: 'Paid' },
            { date: 'Jan 1, 2026', amount: '$99.00', status: 'Paid' },
          ].map((invoice, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-muted/30"
            >
              <div>
                <p className="font-medium">{invoice.date}</p>
                <p className="text-sm text-muted-foreground">{invoice.amount}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-secondary/10 text-secondary text-xs font-medium">
                  {invoice.status}
                </span>
                <button className="text-sm text-primary hover:text-primary/80 transition-colors">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const settingsTabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Key },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'company', label: 'Company', icon: Building },
  { id: 'billing', label: 'Billing', icon: CreditCard },
];

const notificationOptions = [
  {
    icon: Mail,
    title: 'Email Notifications',
    description: 'Receive email updates about new candidates and activities',
    enabled: true,
  },
  {
    icon: Bell,
    title: 'Push Notifications',
    description: 'Get push notifications for important updates',
    enabled: true,
  },
  {
    icon: User,
    title: 'New Candidate Alerts',
    description: 'Notify when new candidates apply to your jobs',
    enabled: true,
  },
  {
    icon: Shield,
    title: 'Bias Alerts',
    description: 'Receive alerts when bias patterns are detected',
    enabled: true,
  },
];
