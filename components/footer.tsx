export default function Footer() {
  return (
    <footer className="ll-footer">
      <p>© {new Date().getFullYear()} Nilanjan Deb</p>
      <p className="ll-footer-credit">
        Paper &amp; pen style after{" "}
        <a href="https://github.com/kevintngo/looseleaf" target="_blank" rel="noopener noreferrer" className="ll-link ll-link-desk">
          Looseleaf
        </a>
      </p>
    </footer>
  );
}
