import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Newspaper, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const newsItems = [
  {
    id: 1,
    category: "HOT NEWS",
    title: "Persiapan Reuni Akbar 2026",
    excerpt: "Pertemuan keluarga besar dijadwalkan akan dilaksanakan pada bulan Desember mendatang di Bandung...",
    date: "12 Okt 2026",
    type: "hot",
    image: "https://picsum.photos/seed/n1/600/400"
  },
  {
    id: 2,
    category: "KEDUKAAN",
    title: "Berita Duka: Berpulangnya Bpk. H. Ahmad Wirahadidjaja",
    excerpt: "Telah berpulang ke Rahmatullah sesepuh keluarga kita, Bpk. H. Ahmad pada usia 82 tahun...",
    date: "10 Okt 2026",
    type: "death",
    image: "https://picsum.photos/seed/n2/600/400"
  },
  {
    id: 3,
    category: "PENGUMUMAN",
    title: "Pembaruan Sistem Kartu Wirahadidjaja",
    excerpt: "Semua anggota diharapkan untuk melakukan verifikasi data ulang melalui aplikasi untuk...",
    date: "08 Okt 2026",
    type: "info",
    image: "https://picsum.photos/seed/n3/600/400"
  }
]

export default function Home() {
  return (
    <PageWrapper>
      <div className="space-y-10 animate-in fade-in duration-500">
        
        {/* Main Hero Banner - Simplified without news/text content */}
        <div className="relative w-full h-[350px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white">
          <Image 
            src="/banner_wirahadidjaja.jpg" 
            alt="Wirahadidjaja Hero Banner" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-primary">Kabar Berita & Update</h2>
            <p className="text-muted-foreground mt-1">Pusat informasi dan berita terbaru keluarga besar Wirahadidjaja.</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Highlight News */}
            <Card className="lg:col-span-2 overflow-hidden border-none shadow-lg group bg-white">
              <div className="relative h-64 md:h-80">
                <Image 
                  src="https://picsum.photos/seed/bandung/1200/800" 
                  alt="Bandung Landmark" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="bandung city"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-2">
                  <Badge className="bg-accent text-accent-foreground font-bold">UTAMA</Badge>
                  <h3 className="text-2xl font-headline font-bold text-white">
                    Persiapan Mubes Tahunan 2026: Membangun Sinergi Antar Generasi
                  </h3>
                  <Button variant="link" className="text-white p-0 h-auto font-semibold gap-1">
                    Selengkapnya <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Side Panels */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-destructive shadow-sm">
                <CardHeader className="pb-3 p-5">
                  <div className="flex items-center gap-2 text-destructive">
                    <Heart className="h-5 w-5" />
                    <CardTitle className="text-lg font-headline">Berita Kedukaan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 space-y-4">
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">Alm. Bpk. H. Ahmad Wirahadidjaja</p>
                    <p className="text-xs text-muted-foreground">Wafat: 10 Oktober 2026 • Kediaman: Bandung</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full text-xs font-bold">Ucapkan Belasungkawa</Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent shadow-sm">
                <CardHeader className="pb-3 p-5">
                  <div className="flex items-center gap-2 text-accent">
                    <Megaphone className="h-5 w-5" />
                    <CardTitle className="text-lg font-headline">Pengumuman</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5 space-y-4">
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Beasiswa Pendidikan Tahap 2 dibuka.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Verifikasi data Kartu Wirahadidjaja.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* News Feed Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-headline font-bold flex items-center gap-2">
              < Newspaper className="h-6 w-6 text-primary" />
              Feed Berita Keluarga
            </h3>
            <Button variant="ghost" className="text-primary hover:text-primary/80 font-bold">Lihat Semua</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all border-none shadow-sm">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3">
                    <Badge variant={item.type === 'death' ? 'destructive' : item.type === 'hot' ? 'default' : 'secondary'}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-5">
                  <div className="text-xs text-muted-foreground mb-1">{item.date}</div>
                  <CardTitle className="text-lg font-headline font-bold leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-5 pb-6">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {item.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
