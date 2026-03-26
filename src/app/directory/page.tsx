import { PageWrapper } from "@/components/layout/page-wrapper"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Mail, Phone, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const members = [
  { id: 1, name: "Budi Wirahadidjaja", location: "Jakarta", role: "Sesepuh", contact: "0812-xxxx-xxxx", email: "budi.w@email.com", avatar: "https://picsum.photos/seed/m1/400/400" },
  { id: 2, name: "Siti Wirahadidjaja", location: "Bandung", role: "Anggota", contact: "0813-xxxx-xxxx", email: "siti.w@email.com", avatar: "https://picsum.photos/seed/m2/400/400" },
  { id: 3, name: "Andi Wirahadidjaja", location: "Surabaya", role: "Anggota", contact: "0814-xxxx-xxxx", email: "andi.w@email.com", avatar: "https://picsum.photos/seed/m3/400/400" },
  { id: 4, name: "Lina Wirahadidjaja", location: "Medan", role: "Pengurus", contact: "0815-xxxx-xxxx", email: "lina.w@email.com", avatar: "https://picsum.photos/seed/m4/400/400" },
  { id: 5, name: "Rizky Wirahadidjaja", location: "Yogyakarta", role: "Anggota", contact: "0816-xxxx-xxxx", email: "rizky.w@email.com", avatar: "https://picsum.photos/seed/m5/400/400" },
  { id: 6, name: "Dewi Wirahadidjaja", location: "Semarang", role: "Anggota", contact: "0817-xxxx-xxxx", email: "dewi.w@email.com", avatar: "https://picsum.photos/seed/m6/400/400" },
]

export default function DirectoryPage() {
  return (
    <PageWrapper>
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
          <h1 className="text-4xl font-headline font-bold text-primary">Direktori Anggota Keluarga</h1>
          <p className="text-muted-foreground mt-1">Cari dan hubungi anggota keluarga besar Wirahadidjaja.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10 h-11 rounded-xl shadow-sm border-none bg-white" placeholder="Cari nama, lokasi, atau peran..." />
          </div>
          <Button variant="outline" className="h-11 rounded-xl gap-2 shadow-sm bg-white">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none group cursor-pointer">
              <CardContent className="p-0">
                <div className="h-24 bg-primary/10 relative">
                  <div className="absolute -bottom-10 left-6">
                    <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="pt-12 pb-6 px-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-headline font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                      <Badge variant={member.role === 'Sesepuh' ? 'default' : member.role === 'Pengurus' ? 'secondary' : 'outline'}>
                        {member.role}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {member.location}
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5" />
                      {member.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5" />
                      {member.contact}
                    </div>
                  </div>
                  
                  <Button className="w-full rounded-lg bg-primary/5 hover:bg-primary/10 text-primary border-none font-semibold">
                    Lihat Profil Lengkap
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
