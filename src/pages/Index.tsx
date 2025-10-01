import { useState } from "react";
import Header from "@/components/Header";
import FilterButtons from "@/components/FilterButtons";
import TweetCard from "@/components/TweetCard";
import { mockTweets } from "@/data/mockTweets";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "text" | "images">("all");

  const filteredTweets = mockTweets.filter((tweet) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "text") return tweet.type === "text";
    if (activeFilter === "images") return tweet.type === "image";
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <FilterButtons
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredTweets.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
