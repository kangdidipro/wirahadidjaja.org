import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, MapPin, Users, Clock, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const events = [
  { 
    id: 1, 
    title: "Arisan Bulanan Keluarga Jakarta", 
    date: "25 Oktober 2024", 
    time: "10:00 - Selesai",
    location: "Kediaman Bpk. Budi, Tebet", 
    category: "Rutin",
    image: "https://picsum.photos/seed/ev1/600/400",
    attendees: 42
  },
  { 
    id: 3, 
    title: "Workshop Digital Marketing", 
    date: "05 November 2024", 
    time: "13:00 - 15:30",
    location: "Zoom Meeting (Online)", 
    category: "Pendidikan",
    image: "https://picsum.photos/seed/ev3/600/400",
    attendees: 28
  },
]

export default function EventsPage() {
  return (
    <PageWrapper>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-headline font-bold text-primary">Aktivitas & Acara Keluarga</h1>
            <p className="text-muted-foreground mt-1">Berbagi momen dan jalin silaturahmi melalui berbagai kegiatan.</p>
          </div>
          <Button className="bg-primary text-white font-bold gap-2 rounded-xl px-6 py-6 h-auto shadow-lg hover:shadow-primary/20">
            <Plus className="h-5 w-5" />
            Buat Acara Baru
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Button variant="secondary" className="rounded-full px-6">Semua Acara</Button>
          <Button variant="ghost" className="rounded-full px-6">Terdekat</Button>
          <Button variant="ghost" className="rounded-full px-6">Rutin</Button>
          <Button variant="ghost" className="rounded-full px-6">Besar</Button>
          <Button variant="ghost" className="rounded-full px-6">Online</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group">
              <div className="relative w-full md:w-48 lg:w-64 h-48 md:h-auto overflow-hidden">
                <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary border-none font-bold uppercase text-[10px]">
                    {event.category}
                  </Badge>
                </div>
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-accent font-bold">
                    <CalendarIcon className="h-3 w-3" />
                    {event.date}
                  </div>
                  <CardTitle className="text-xl font-headline font-bold group-hover:text-primary transition-colors leading-tight">
                    {event.title}
                  </CardTitle>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5" />
                    {event.attendees} Anggota Bergabung
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 border-none font-bold text-xs">
                    Ikut Serta
                  </Button>
                  <Button variant="outline" className="flex-1 text-xs border-muted-foreground/20">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
