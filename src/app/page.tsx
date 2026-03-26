import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Newspaper, Heart, AlertCircle, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const newsItems = [
  {
    id: 1,
    category: "HOT NEWS",
    title: "Persiapan Reuni Akbar 2024",
    excerpt: "Pertemuan keluarga besar dijadwalkan akan dilaksanakan pada bulan Desember mendatang di Bandung...",
    date: "12 Okt 2024",
    type: "hot",
    image: "https://picsum.photos/seed/n1/600/400"
  },
  {
    id: 2,
    category: "KEDUKAAN",
    title: "Berita Duka: Berpulangnya Bpk. H. Ahmad Wirahadidjaja",
    excerpt: "Telah berpulang ke Rahmatullah sesepuh keluarga kita, Bpk. H. Ahmad pada usia 82 tahun...",
    date: "10 Okt 2024",
    type: "death",
    image: "https://picsum.photos/seed/n2/600/400"
  },
  {
    id: 3,
    category: "PENGUMUMAN",
    title: "Pembaruan Sistem Kartu Wirahadidjaja",
    excerpt: "Semua anggota diharapkan untuk melakukan verifikasi data ulang melalui aplikasi untuk...",
    date: "08 Okt 2024",
    type: "info",
    image: "https://picsum.photos/seed/n3/600/400"
  }
]

export default function Home() {
  return (
    <PageWrapper>
      <div className="space-y-8 animate-in fade-in duration-500">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-headline font-bold text-primary">Kabar Berita Wirahadidjaja</h1>
            <p className="text-muted-foreground mt-1">Berita terbaru dan pembaruan penting keluarga besar Wirahadidjaja.</p>
          </div>
          <Link href="/navigator">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2">
              <Sparkles className="h-4 w-4" />
              Tanya Navigator AI
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main News */}
          <Card className="lg:col-span-2 overflow-hidden border-none shadow-lg group">
            <div className="relative h-64 md:h-96">
              <Image 
                src="https://picsum.photos/seed/hero/1200/800" 
                alt="Hero News" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 space-y-3">
                <Badge className="bg-accent text-accent-foreground font-bold">HOT NEWS</Badge>
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-white leading-tight">
                  Musyawarah Besar Tahunan Keluarga Wirahadidjaja 2024: Membangun Sinergi Antar Generasi
                </h2>
                <p className="text-white/80 line-clamp-2 max-w-2xl">
                  Musyawarah ini bertujuan untuk mempererat silaturahmi sekaligus merancang program pemberdayaan ekonomi bagi anggota keluarga muda yang baru lulus kuliah.
                </p>
                <Button variant="link" className="text-white p-0 h-auto font-semibold gap-1">
                  Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Side Panels */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-destructive shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-destructive">
                  <Heart className="h-5 w-5" />
                  <CardTitle className="text-lg font-headline">Berita Kedukaan</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Alm. Bpk. H. Ahmad Wirahadidjaja</p>
                  <p className="text-xs text-muted-foreground">Wafat: 10 Oktober 2024 • Kediaman: Bandung</p>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs">Ucapkan Belasungkawa</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-accent">
                  <Megaphone className="h-5 w-5" />
                  <CardTitle className="text-lg font-headline">Pengumuman Penting</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Pendaftaran Beasiswa Pendidikan Tahap 2 dibuka.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Update data Kartu Wirahadidjaja sebelum 31 Okt.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* News Feed Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-headline font-bold flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-primary" />
              Berita & Pembaruan
            </h3>
            <Button variant="ghost" className="text-primary hover:text-primary/80">Lihat Semua</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3">
                    <Badge variant={item.type === 'death' ? 'destructive' : item.type === 'hot' ? 'default' : 'secondary'}>
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="text-xs text-muted-foreground mb-2">{item.date}</div>
                  <CardTitle className="text-lg font-headline leading-snug line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
