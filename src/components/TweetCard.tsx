import { Heart, Repeat2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export interface Tweet {
  id: string;
  author: string;
  handle: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  retweets: number;
  type: "text" | "image";
}

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in bg-card">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <img
            src={tweet.avatar}
            alt={tweet.author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground truncate">{tweet.author}</p>
            <p className="text-sm text-muted-foreground truncate">@{tweet.handle}</p>
          </div>
        </div>

        <p className="text-foreground leading-relaxed mb-4">{tweet.content}</p>

        {tweet.image && (
          <img
            src={tweet.image}
            alt="Tweet content"
            className="w-full rounded-lg mb-4 object-cover max-h-96"
          />
        )}

        <div className="flex items-center gap-6 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span>{tweet.likes.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Repeat2 className="w-4 h-4" />
            <span>{tweet.retweets.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TweetCard;
