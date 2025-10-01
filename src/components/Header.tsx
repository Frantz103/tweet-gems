const Header = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-light tracking-tight text-foreground">
          Curated Tweets
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The finest moments from Twitter
        </p>
      </div>
    </header>
  );
};

export default Header;
