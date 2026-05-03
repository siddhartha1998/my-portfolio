export default function AdminDashboard() {
  const stats = [
    { label: "Total Blogs", value: "1", trend: "+1 this month" },
    { label: "Total Projects", value: "2", trend: "Up to date" },
    { label: "New Messages", value: "0", trend: "All read" },
    { label: "Site Views", value: "1,240", trend: "+12% vs last week" },
  ];

  return (
    <div>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit)' }}>Dashboard Overview</h1>
        <p style={{ color: 'hsl(var(--muted-foreground))' }}>Welcome back, Siddhiganesh. Here's what's happening today.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map((stat, i) => (
          <div key={i} className="glass" style={{ padding: '2rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', display: 'block', marginBottom: '0.5rem' }}>{stat.label}</span>
            <span style={{ fontSize: '2.5rem', fontWeight: '700', display: 'block', marginBottom: '0.5rem' }}>{stat.value}</span>
            <span style={{ fontSize: '0.8rem', color: 'hsl(var(--primary))' }}>{stat.trend}</span>
          </div>
        ))}
      </div>

      <div className="glass" style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ background: 'hsl(var(--primary))', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600' }}>Create New Blog</button>
          <button style={{ background: 'hsla(0, 0%, 100%, 0.1)', color: 'white', border: '1px solid var(--glass-border)', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600' }}>Add Project</button>
        </div>
      </div>
    </div>
  );
}
