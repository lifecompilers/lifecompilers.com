const Footer = () => {
  return (
    <footer className="bg-background text-muted-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-2xl font-bold text-foreground">
            Life<span className="text-primary">COMPILERS</span>
          </div>
          <p className="mt-2 text-sm font-medium">© {new Date().getFullYear()} LifeCOMPILERS. All rights reserved.</p>
        </div>
        <div>
          Made with <span style={{ color: '#f43f5e' }}>&#10084;</span> in India
        </div>
      </div>
    </footer>
  )
}

export default Footer
