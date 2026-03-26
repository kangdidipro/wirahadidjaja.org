import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { History, Image as ImageIcon, BookOpen, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const archiveItems = [
  { id: 1, title: "Foto Keluarga Besar Wirahadidjaja (1950)", year: "1950", category: "Foto", image: "https://picsum.photos/seed/h1/800/600", desc: "Foto bersama seluruh keluarga inti di kediaman pertama di Solo." },
  { id: 2, title: "Catatan Perjalanan Aki Wirahadidjaja", year: "1930", category: "Dokumen", image: "https://picsum.photos/seed/h2/800/600", desc: "Digitalisasi catatan harian Aki selama masa perjuangan kemerdekaan." },
  { id: 3, title: "Rumah Leluhur di Jawa Tengah", year: "1945", category: "Foto", image: "https://picsum.photos/seed/h3/800/600", desc: "Tampak depan rumah joglo yang menjadi saksi bisu awal mula keluarga besar." },
  { id: 4, title: "Silsilah Keluarga (Edisi Digital)", year: "2023", category: "Silsilah", image: "https://picsum.photos/seed/h4/800/600", desc: "Visualisasi interaktif garis keturunan dari 5 generasi terakhir." },
  { id: 5, title: "Upacara Adat Turun Tanah (1975)", year: "1975", category: "Foto", image: "https://picsum.photos/seed/h5/800/600", desc: "Momen bersejarah tradisi keluarga yang masih dipertahankan hingga kini." },
  { id: 6, title: "Koleksi Barang Antik Uyut", year: "1920", category: "Artefak", image: "https://picsum.photos/seed/h6/800/600", desc: "Dokumentasi barang-barang peninggalan yang disimpan di museum keluarga." },
]

export default function ArchivePage() {
  return (
    <PageWrapper>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-4xl font-headline font-bold text-primary">Arsip Kronik Sejarah</h1>
            <p className="text-muted-foreground mt-1">Melestarikan warisan dan cerita leluhur untuk generasi mendatang.</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-muted">Semua</Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-muted">Foto</Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-muted">Dokumen</Badge>
            <Badge variant="outline" className="px-3 py-1 cursor-pointer hover:bg-muted">Silsilah</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archiveItems.map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col group cursor-pointer border-none shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary hover:bg-white">{item.category}</Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1 font-bold">
                  <Clock className="h-3 w-3" />
                  TAHUN {item.year}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-headline font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                  <span className="flex items-center gap-1">
                    <ImageIcon className="h-3 w-3" />
                    Buka Galeri
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    Baca Cerita
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
