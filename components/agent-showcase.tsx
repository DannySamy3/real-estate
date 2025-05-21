import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

// Sample agent data
const agents = [
  {
    id: 1,
    name: "Jessica Parker",
    title: "Senior Real Estate Agent",
    specialization: "Luxury Properties",
    phone: "(555) 123-4567",
    email: "jessica@primeestate.com",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Robert Chen",
    title: "Real Estate Consultant",
    specialization: "Commercial Properties",
    phone: "(555) 234-5678",
    email: "robert@primeestate.com",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    title: "Property Specialist",
    specialization: "Residential Homes",
    phone: "(555) 345-6789",
    email: "maria@primeestate.com",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Senior Agent",
    specialization: "Investment Properties",
    phone: "(555) 456-7890",
    email: "james@primeestate.com",
    image: "/placeholder.svg?height=300&width=300",
  },
];

export function AgentShowcase() {
  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {agents.map((agent) => (
        <Card key={agent.id} className='overflow-hidden'>
          <div className='aspect-square relative'>
            <Image
              src={agent.image || "/placeholder.svg"}
              alt={agent.name}
              fill
              loading='lazy'
              className='object-cover'
            />
          </div>
          <CardContent className='p-4'>
            <h3 className='font-bold text-lg'>{agent.name}</h3>
            <p className='text-sm text-muted-foreground mb-1'>{agent.title}</p>
            <p className='text-sm font-medium mb-4'>
              Specializes in: {agent.specialization}
            </p>
            <div className='space-y-2'>
              <div className='flex items-center text-sm'>
                <Phone className='h-4 w-4 mr-2 text-primary' />
                <span>{agent.phone}</span>
              </div>
              <div className='flex items-center text-sm'>
                <Mail className='h-4 w-4 mr-2 text-primary' />
                <span>{agent.email}</span>
              </div>
            </div>
            <Button variant='outline' className='w-full mt-4'>
              Contact Agent
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
