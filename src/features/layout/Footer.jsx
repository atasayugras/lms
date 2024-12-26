function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">© {currentYear} LMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
