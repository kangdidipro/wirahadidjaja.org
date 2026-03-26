"use client"

import * as React from "react"
import { PageWrapper } from "@/components/layout/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Send, Bot, User, Loader2, ExternalLink, Mail, Phone, Info } from "lucide-react"
import { navigateService, type AiServiceNavigatorOutput } from "@/ai/flows/ai-service-navigator-flow"
import { Badge } from "@/components/ui/badge"

export default function NavigatorPage() {
  const [query, setQuery] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<AiServiceNavigatorOutput | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    try {
      const output = await navigateService({ query })
      setResult(output)
    } catch (err) {
      setError("Terjadi kesalahan saat menghubungi Navigator AI. Silakan coba lagi.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
        <div className="text-center space-y-4">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-2">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-headline font-bold text-primary">Navigator Layanan AI</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tanyakan apapun mengenai layanan komunitas Wirahadidjaja, dari bantuan hukum hingga Kartu Wirahadidjaja.
          </p>
        </div>

        <Card className="border-none shadow-xl overflow-hidden bg-white/50 backdrop-blur-sm">
          <CardContent className="p-0">
            <form onSubmit={handleSearch} className="p-6 bg-white flex gap-2">
              <div className="relative flex-1">
                <Bot className="absolute left-3 top-3 h-5 w-5 text-accent" />
                <Input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Contoh: Bagaimana cara mengurus Kartu Wirahadidjaja?" 
                  className="pl-10 h-12 rounded-xl border-muted bg-muted/30 focus-visible:ring-accent"
                  disabled={loading}
                />
              </div>
              <Button type="submit" disabled={loading} className="h-12 w-12 rounded-xl bg-accent hover:bg-accent/90">
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </Button>
            </form>

            <div className="p-8 space-y-8 min-h-[300px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 text-muted-foreground py-12">
                  <div className="relative">
                    <Loader2 className="h-12 w-12 animate-spin text-accent" />
                    <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-accent animate-pulse" />
                  </div>
                  <p className="font-medium animate-pulse">Navigator AI sedang mencari informasi terbaik untuk Anda...</p>
                </div>
              ) : result ? (
                <div className="space-y-8 animate-in fade-in duration-500">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-6 flex-1">
                      <div className="prose prose-blue max-w-none">
                        <p className="text-lg leading-relaxed text-foreground">
                          {result.informationSummary}
                        </p>
                      </div>

                      {result.relevantResources.length > 0 && (
                        <div className="space-y-3">
                          <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Sumber Daya Relevan
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {result.relevantResources.map((res, i) => (
                              <a 
                                key={i} 
                                href={res.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg border bg-white hover:border-accent hover:bg-accent/5 transition-all flex justify-between items-center group"
                              >
                                <span className="text-sm font-medium truncate pr-2">{res.title}</span>
                                <ExternalLink className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {result.contactInformation.length > 0 && (
                        <div className="space-y-3">
                          <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Informasi Kontak
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {result.contactInformation.map((contact, i) => (
                              <Badge key={i} variant="secondary" className="px-3 py-1.5 rounded-full flex gap-2 items-center">
                                <Info className="h-3 w-3 text-accent" />
                                {contact}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center h-full space-y-2 text-destructive py-12">
                  <Info className="h-12 w-12" />
                  <p className="font-medium">{error}</p>
                  <Button variant="ghost" onClick={() => setError(null)} className="text-xs">Tutup</Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-center py-12">
                  <div className="h-24 w-24 rounded-full bg-muted/50 flex items-center justify-center border-4 border-dashed border-muted-foreground/20">
                    <Bot className="h-10 w-10 text-muted-foreground/30" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-medium">Belum ada aktivitas. Silakan ketik pertanyaan Anda di atas.</p>
                    <div className="flex flex-wrap justify-center gap-2 pt-4">
                      {["Bantuan Hukum", "Layanan Kesehatan", "Beasiswa Pendidikan", "Kartu Wirahadidjaja"].map((tag) => (
                        <button 
                          key={tag}
                          onClick={() => setQuery(`Bagaimana cara mengakses ${tag}?`)}
                          className="text-xs px-3 py-1.5 rounded-full border border-muted hover:border-accent hover:text-accent transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  )
}
