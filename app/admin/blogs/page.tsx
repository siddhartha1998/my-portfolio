import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";

export default async function AdminBlogs() {
  const blogs = await prisma.blogPost.findMany({
    orderBy: { date: 'desc' }
  });

  return (
    <div>
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit)' }}>Blog Management</h1>
          <p style={{ color: 'hsl(var(--muted-foreground))' }}>Create and manage your technical articles.</p>
        </div>
        <Link href="/admin/blogs/new" style={{ background: 'hsl(var(--primary))', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={20} />
          New Post
        </Link>
      </header>

      <div className="glass" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--glass-border)', background: 'hsla(0, 0%, 100%, 0.02)' }}>
              <th style={{ padding: '1.25rem 2rem' }}>Title</th>
              <th style={{ padding: '1.25rem 2rem' }}>Status</th>
              <th style={{ padding: '1.25rem 2rem' }}>Date</th>
              <th style={{ padding: '1.25rem 2rem' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: 'hsl(var(--muted-foreground))' }}>No blog posts found.</td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '1.25rem 2rem' }}>
                    <div style={{ fontWeight: '600' }}>{blog.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>/{blog.slug}</div>
                  </td>
                  <td style={{ padding: '1.25rem 2rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '2rem', 
                      fontSize: '0.75rem', 
                      background: blog.published ? 'hsla(var(--accent), 0.1)' : 'hsla(0, 0%, 100%, 0.05)',
                      color: blog.published ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))'
                    }}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td style={{ padding: '1.25rem 2rem' }}>{new Date(blog.date).toLocaleDateString()}</td>
                  <td style={{ padding: '1.25rem 2rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <Link href={`/admin/blogs/edit/${blog.id}`} style={{ color: 'hsl(var(--muted-foreground))' }}><Edit size={18} /></Link>
                      <button style={{ background: 'none', border: 'none', color: 'hsl(var(--destructive))', cursor: 'pointer' }}><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
