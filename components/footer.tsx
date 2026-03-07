export default function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='container mx-auto px-6 md:px-8 py-6'>
        <p className='text-center text-xs font-mono text-muted-foreground tracking-wide'>
          © {new Date().getFullYear()} Nilanjan Deb
        </p>
      </div>
    </footer>
  );
}
