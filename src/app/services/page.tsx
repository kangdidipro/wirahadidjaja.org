import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Scale, HeartPulse, GraduationCap, TrendingUp, Handshake, Globe, CreditCard, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "Bantuan Hukum",
    icon: Scale,
    desc: "Konsultasi hukum gratis untuk anggota keluarga yang membutuhkan pendampingan legal.",
    color: "bg-blue-500",
  },
  {
    title: "Dukungan Kesehatan",
    icon: HeartPulse,
    desc: "Akses ke jaringan dokter keluarga, bantuan biaya rawat inap, dan program cek kesehatan rutin.",
    color: "bg-red-500",
  },
  {
    title: "Program Pendidikan",
    icon: GraduationCap,
    desc: "Beasiswa prestasi untuk anak-anak keluarga Wirahadidjaja dari tingkat SD hingga Perguruan Tinggi.",
    color: "bg-green-500",
  },
  {
    title: "Pemberdayaan Ekonomi",
    icon: TrendingUp,
    desc: "Pinjaman modal usaha tanpa bunga (Qardhul Hasan) bagi anggota yang ingin memulai bisnis.",
    color: "bg-amber-500",
  },
  {
    title: "Wakaf, Infaq & Shadaqah",
    icon: Handshake,
    desc: "Pengelolaan dana sosial keluarga untuk membantu sesama anggota dan masyarakat luas.",
    color: "bg-teal-500",
  },
  {
    title: "Sosial Budaya Lingkungan",
    icon: Globe,
    desc: "Kegiatan pelestarian budaya daerah asal keluarga dan inisiatif lingkungan hijau.",
    color: "bg-indigo-500",
  },
]

export default function ServicesPage() {
  return (
    <PageWrapper>
      <div className="space-y-10 animate-in fade-in duration-500">
        <div className="space-y-2">
          <h1 className="text-4xl font-headline font-bold text-primary">Layanan Khusus Komunitas</h1>
          <p className="text-muted-foreground text-lg">Program dukungan eksklusif untuk kesejahteraan seluruh keluarga besar.</p>
        </div>

        {/* Kartu Wirahadidjaja Section */}
        <Card className="bg-primary text-primary-foreground border-none shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-32 translate-x-32 blur-3xl group-hover:bg-accent/30 transition-all duration-700" />
          <CardHeader className="relative z-10 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="h-48 w-80 shrink-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl border border-white/20 p-6 flex flex-col justify-between shadow-lg backdrop-blur-sm">
                <div className="flex justify-between items-start">
                  <div className="font-headline font-bold text-xl italic tracking-widest opacity-80 uppercase">Wirahadidjaja</div>
                  <CreditCard className="h-8 w-8 opacity-60" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs opacity-60 tracking-widest">NOMOR ANGGOTA</div>
                  <div className="font-mono text-lg tracking-wider">1920 0045 8821 XXXX</div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-sm font-medium">KELUARGA BESAR</div>
                  <div className="text-[10px] opacity-60">EST. 1920</div>
                </div>
              </div>
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground font-bold px-3 py-1">UNGGULAN</Badge>
                <CardTitle className="text-3xl font-headline font-bold">Kartu Wirahadidjaja</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg leading-relaxed">
                  Identitas resmi keluarga yang memberikan akses ke seluruh layanan komunitas, diskon di merchant mitra keluarga, serta prioritas dalam program bantuan sosial.
                </CardDescription>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button className="bg-white text-primary hover:bg-white/90 font-bold px-6 py-6 rounded-xl">
                    Ajukan Pembuatan Kartu
                  </Button>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-6 py-6 rounded-xl">
                    Panduan Penggunaan
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm flex flex-col">
              <CardHeader>
                <div className={`h-12 w-12 rounded-xl ${service.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button variant="link" className="p-0 text-primary font-bold group-hover:gap-2 transition-all">
                  Info Detail <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
