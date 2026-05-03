import { createProject } from "@/app/actions/project";

export default function NewProject() {
  return (
    <div>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit)' }}>Add New Project</h1>
        <p style={{ color: 'hsl(var(--muted-foreground))' }}>Showcase a new piece of work.</p>
      </header>

      <form action={createProject} className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Project Title</label>
          <input name="title" required style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="e.g., Terminal Management System" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Description</label>
          <textarea name="description" required rows={3} style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="Brief description of the project" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Tech Stack (comma separated)</label>
          <input name="tech" style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="Next.js, Prisma, Supabase" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>GitHub URL</label>
            <input name="github" style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="https://github.com/..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Live Demo URL</label>
            <input name="demo" style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="https://..." />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" style={{ background: 'hsl(var(--primary))', color: 'white', border: 'none', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>Add Project</button>
          <button type="reset" style={{ background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
