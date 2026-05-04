import { useState } from 'react';
import { Music, Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import { AudioPlayer } from './components/AudioPlayer';
import { VideoGallery } from './components/VideoGallery';
import { TrackList } from './components/TrackList';
import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './components/ui/dialog';

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const tracks = [
    {
      id: 1,
      title: 'Midnight Dreams',
      artist: 'Luna Sky',
      duration: '3:45',
      album: 'Echoes of Tomorrow',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: 2,
      title: 'Electric Hearts',
      artist: 'Luna Sky',
      duration: '4:12',
      album: 'Echoes of Tomorrow',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: 3,
      title: 'Neon Lights',
      artist: 'Luna Sky',
      duration: '3:58',
      album: 'Echoes of Tomorrow',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    {
      id: 4,
      title: 'Starlight Boulevard',
      artist: 'Luna Sky',
      duration: '4:30',
      album: 'Cosmic Journey',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    },
    {
      id: 5,
      title: 'Digital Paradise',
      artist: 'Luna Sky',
      duration: '3:22',
      album: 'Cosmic Journey',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Midnight Dreams - Official Music Video',
      thumbnail: 'https://images.unsplash.com/photo-1635961726947-0f821cf9ba28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Electric Hearts - Live Performance',
      thumbnail: 'https://images.unsplash.com/photo-1719650932800-ebb72adb2d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Behind the Scenes - Album Recording',
      thumbnail: 'https://images.unsplash.com/photo-1719650932798-bda508a2b209?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
            <span className="text-xl sm:text-2xl font-bold text-white">Luna Sky</span>
          </div>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <a href="#home" className="text-purple-300 hover:text-white transition-colors text-sm lg:text-base">
              Головна
            </a>
            <a href="#music" className="text-purple-300 hover:text-white transition-colors text-sm lg:text-base">
              Музика
            </a>
            <a href="#videos" className="text-purple-300 hover:text-white transition-colors text-sm lg:text-base">
              Відео
            </a>
            <a href="#about" className="text-purple-300 hover:text-white transition-colors text-sm lg:text-base">
              Про мене
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* Hero Section */}
        <section id="home" className="text-center py-12 sm:py-16 lg:py-20">
          <div className="inline-block mb-4 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30">
            <span className="text-sm sm:text-base text-purple-300">🎵 Новий альбом вже доступний</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent px-4">
            Luna Sky
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Відкрийте для себе унікальне звучання електронної музики з елементами поп та інді
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full sm:w-auto">
              Слухати зараз
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 w-full sm:w-auto">
              Дізнатися більше
            </Button>
          </div>
        </section>

        {/* Music Player */}
        <section id="music" className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Зараз грає
          </h2>
          <AudioPlayer tracks={tracks} />
        </section>

        {/* Tracks & Albums */}
        <section className="max-w-4xl mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/10">
              <TabsTrigger value="all" className="text-xs sm:text-sm">Всі треки</TabsTrigger>
              <TabsTrigger value="echoes" className="text-xs sm:text-sm">Echoes</TabsTrigger>
              <TabsTrigger value="cosmic" className="text-xs sm:text-sm">Cosmic</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <TrackList tracks={tracks} onTrackPlay={(index) => console.log('Play track', index)} />
            </TabsContent>

            <TabsContent value="echoes" className="mt-6">
              <TrackList
                tracks={tracks.filter((t) => t.album === 'Echoes of Tomorrow')}
                onTrackPlay={(index) => console.log('Play track', index)}
              />
            </TabsContent>

            <TabsContent value="cosmic" className="mt-6">
              <TrackList
                tracks={tracks.filter((t) => t.album === 'Cosmic Journey')}
                onTrackPlay={(index) => console.log('Play track', index)}
              />
            </TabsContent>
          </Tabs>
        </section>

        {/* Video Gallery */}
        <section id="videos" className="px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Відео
          </h2>
          <VideoGallery videos={videos} onVideoSelect={setSelectedVideo} />
        </section>

        {/* About Section */}
        <section id="about" className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
            Про артиста
          </h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="p-8 bg-white/5 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1628015676221-6cf8c28ea6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBtdXNpY2lhbiUyMGFydGlzdCUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Nzg4NzE1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luna Sky Portrait"
                className="w-full aspect-square rounded-lg object-cover mb-6"
              />
            </Card>
            <div className="space-y-6">
              <p className="text-purple-100 text-lg leading-relaxed">
                Luna Sky - це українська виконавиця, яка поєднує електронну музику з елементами поп та інді культури.
                Її унікальне звучання та глибокі тексти знайшли відгук у серцях тисяч слухачів по всьому світу.
              </p>
              <p className="text-purple-200 leading-relaxed">
                Почавши свій шлях у 2020 році, вона випустила два студійних альбоми та виступила на найбільших
                фестивалях України. Її музика - це подорож крізь емоції, мрії та сучасне життя.
              </p>
              <div className="pt-4">
                <h3 className="text-white font-semibold mb-4">Досягнення:</h3>
                <ul className="space-y-2 text-purple-200">
                  <li>✨ Найкращий новий артист 2021</li>
                  <li>🎵 Більше 10 млн прослуховувань</li>
                  <li>🎤 Виступи на Atlas Weekend та UPark Festival</li>
                  <li>🏆 Номінація на премію YUNA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="max-w-2xl mx-auto px-4">
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-white/10 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Слідкуйте за мною
            </h3>
            <p className="text-sm sm:text-base text-purple-200 mb-4 sm:mb-6">
              Будьте в курсі всіх новин та анонсів
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <Button
                size="icon"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-purple-300">
          <p>© 2026 Luna Sky. Всі права захищені.</p>
        </div>
      </footer>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl bg-slate-900 border-purple-500/30">
          <DialogHeader>
            <DialogTitle className="text-white">Відео</DialogTitle>
          </DialogHeader>
          {selectedVideo && (
            <div className="aspect-video">
              <iframe
                src={selectedVideo}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}