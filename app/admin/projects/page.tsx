export const dynamic = "force-dynamic";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Project } from "@prisma/client";

export default async function AdminProjects() {
  let projects: Project[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { order: 'asc' }
    });
  } catch (error: any) {
    console.error("Prisma error in AdminProjects:", error);
    return (
      <div className="glass" style={{ padding: '3rem', textAlign: 'center', border: '1px solid hsl(var(--destructive))' }}>
        <h2 style={{ color: 'hsl(var(--destructive))', marginBottom: '1rem' }}>Database Connection Error</h2>
        <p style={{ color: 'hsl(var(--muted-foreground))' }}>
          Could not reach the database. Please check your DATABASE_URL in .env and ensure your Supabase project is active.
        </p>
        <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
          Error: {error.message || "Unknown error"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit)' }}>Project Management</h1>
          <p style={{ color: 'hsl(var(--muted-foreground))' }}>Showcase your best work in the portfolio.</p>
        </div>
        <Link href="/admin/projects/new" style={{ background: 'hsl(var(--primary))', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={20} />
          Add Project
        </Link>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.length === 0 ? (
          <div className="glass" style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center' }}>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>No projects added yet.</p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="glass" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link href={`/admin/projects/edit/${project.id}`} style={{ color: 'hsl(var(--muted-foreground))' }}><Edit size={18} /></Link>
                  <button style={{ background: 'none', border: 'none', color: 'hsl(var(--destructive))', cursor: 'pointer' }}><Trash2 size={18} /></button>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem', minHeight: '3rem' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{ fontSize: '0.7rem', padding: '0.2rem 0.6rem', background: 'hsla(var(--primary), 0.1)', color: 'hsl(var(--primary))', borderRadius: '1rem' }}>{t}</span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
