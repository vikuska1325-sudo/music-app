import { Play } from 'lucide-react';
import { Card } from './ui/card';

interface Video {
  id: number;
  title: string;
  thumbnail?: string;
  url: string;
}

interface VideoGalleryProps {
  videos: Video[];
  onVideoSelect: (url: string) => void;
}

export function VideoGallery({ videos, onVideoSelect }: VideoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="group cursor-pointer overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300"
          onClick={() => onVideoSelect(video.url)}
        >
          <div className="relative aspect-video bg-gradient-to-br from-purple-900/40 to-pink-900/40">
            {video.thumbnail && (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
              {video.title}
            </h3>
          </div>
        </Card>
      ))}
    </div>
  );
}
