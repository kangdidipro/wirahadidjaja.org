import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Globe, Link as LinkIcon, Share2, Tag, ArrowUpRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const resources = [
  { id: 1, title: "Update Kebijakan BPJS Kesehatan 2024", source: "Kemenkes RI", category: "Kesehatan", date: "15 Okt 2024", link: "#" },
  { id: 2, title: "Panduan Sertifikasi Tanah Keluarga", source: "BPN", category: "Hukum", date: "12 Okt 2024", link: "#" },
  { id: 3, title: "Program Bantuan UMKM Pemerintah", source: "Kemenkop UKM", category: "Ekonomi", date: "10 Okt 2024", link: "#" },
  { id: 4, title: "Info Lowongan Kerja Perusahaan Mitra", source: "Wirahadidjaja HR", category: "Karir", date: "08 Okt 2024", link: "#" },
  { id: 5, title: "Prosedur Pembuatan Paspor Baru", source: "Imigrasi", category: "Layanan", date: "05 Okt 2024", link: "#" },
  { id: 6, title: "Update Aturan Pajak Kendaraan Bermotor", source: "Samsat", category: "Regulasi", date: "01 Okt 2024", link: "#" },
]

export default function PublicInfoPage() {
  return (
    <PageWrapper>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-headline font-bold text-primary">Pertukaran Informasi Publik</h1>
            <p className="text-muted-foreground mt-1">Sumber daya dan informasi publik bermanfaat untuk seluruh anggota.</p>
          </div>
          <Button variant="outline" className="rounded-xl font-bold gap-2">
            <Share2 className="h-4 w-4" />
            Bagikan Informasi
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input className="pl-10 h-12 rounded-xl bg-white border-none shadow-sm" placeholder="Cari informasi publik, link, atau dokumen..." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((item) => (
            <Card key={item.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden bg-white">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold">
                    {item.category}
                  </Badge>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase">{item.date}</span>
                </div>
                <CardTitle className="text-lg font-headline font-bold leading-tight group-hover:text-primary transition-colors cursor-pointer flex items-start gap-2">
                  {item.title}
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 group-hover:opacity-100 transition-all text-accent" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3 w-3" />
                    Sumber: {item.source}
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/10 text-primary">
                    <LinkIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-accent/5 border-2 border-dashed border-accent/20 p-8 text-center space-y-4 rounded-2xl">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
              <LinkIcon className="h-6 w-6 text-accent" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-headline font-bold text-primary">Punya Informasi Bermanfaat?</h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Bantu sesama anggota keluarga dengan membagikan link berita, dokumen panduan, atau informasi publik lainnya yang relevan.
            </p>
          </div>
          <Button className="bg-accent text-accent-foreground font-bold rounded-xl px-8">
            Posting Informasi Sekarang
          </Button>
        </Card>
      </div>
    </PageWrapper>
  )
}
