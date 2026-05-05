export const dynamic = "force-dynamic";
import prisma from "@/lib/prisma";
import { Contact } from "@prisma/client";

export default async function AdminMessages() {
  let messages: Contact[] = [];
  try {
    messages = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' }
    });
  } catch (error: any) {
    console.error("Prisma error in AdminMessages:", error);
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
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-outfit)' }}>Visitor Messages</h1>
        <p style={{ color: 'hsl(var(--muted-foreground))' }}>Messages sent through the contact form.</p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {messages.length === 0 ? (
          <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'hsl(var(--muted-foreground))' }}>No messages yet.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="glass" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{msg.name}</h3>
                  <span style={{ fontSize: '0.9rem', color: 'hsl(var(--primary))' }}>{msg.email}</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>
                  {new Date(msg.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p style={{ color: 'hsl(var(--foreground))', lineHeight: '1.6' }}>{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
