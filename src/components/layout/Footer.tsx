const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        {/* Add more footer content here, e.g., links, social media icons */}
      </div>
    </footer>
  );
};

export default Footer;
