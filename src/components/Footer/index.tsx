const Footer = () => {
  return (
    <footer className="mt-8 border-t border-amber-400 p-6 text-center">
      <h3 className="text-lg mb-3 sm:text-xl">Contact us</h3>
      <p data-testid="phone" className="text-sm">Phone: Please do not call us</p>
      <a href="mailto:no@cheating.com" className="text-sm underline underline-offset-4">no@cheating.com</a>
      <p data-testid="copyright" className="text-xs mt-4 sm:text-sm">Copyright 2026</p>
    </footer>
  )
}

export default Footer