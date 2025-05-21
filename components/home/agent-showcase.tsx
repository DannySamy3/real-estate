import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import { AGENTS } from "@/data/agents"

export function AgentShowcase() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {AGENTS.map((agent) => (
        <Card key={agent.id} className="overflow-hidden">
          <div className="aspect-square relative">
            <Image src={agent.image || "/placeholder.svg"} alt={agent.name} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg">{agent.name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{agent.title}</p>
            <p className="text-sm font-medium mb-4">Specializes in: {agent.specialization}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>{agent.phone}</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>{agent.email}</span>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              Contact Agent
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
