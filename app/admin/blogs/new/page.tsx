import { createBlogPost } from "@/app/actions/blog";
import styles from "../../AdminLayout.module.css";

export default function NewBlog() {
  return (
    <div>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit)' }}>Create New Post</h1>
        <p style={{ color: 'hsl(var(--muted-foreground))' }}>Draft your next technical article.</p>
      </header>

      <form action={createBlogPost} className="glass" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Title</label>
            <input name="title" required style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="Post Title" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Slug</label>
            <input name="slug" required style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="post-url-slug" />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Excerpt</label>
          <textarea name="excerpt" rows={3} style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white' }} placeholder="Brief summary of the post" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>Content (Markdown)</label>
          <textarea name="content" required rows={15} style={{ background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: '0.5rem', color: 'white', fontFamily: 'monospace' }} placeholder="# My Technical Article..." />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <input type="checkbox" name="published" id="published" />
          <label htmlFor="published">Publish immediately</label>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit" style={{ background: 'hsl(var(--primary))', color: 'white', border: 'none', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>Save Post</button>
          <button type="reset" style={{ background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
