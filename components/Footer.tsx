const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container">
        <p style={{ color: 'hsl(var(--muted-foreground))' }}>
          &copy; {new Date().getFullYear()} Siddhiganesh Joshi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
