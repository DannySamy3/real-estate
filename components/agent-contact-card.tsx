import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

interface AgentContactCardProps {
  agent: {
    name: string;
    image: string;
    phone: string;
    email: string;
  };
}

export default function AgentContactCard({ agent }: AgentContactCardProps) {
  return (
    <Card>
      <CardContent className='p-6'>
        <h2 className='text-2xl font-bold mb-6'>Contact Agent</h2>
        <div className='flex items-center gap-4 mb-6'>
          <div className='relative w-16 h-16 rounded-full overflow-hidden'>
            <Image
              src={agent.image || "/placeholder.svg"}
              alt={agent.name}
              fill
              loading='lazy'
              className='object-cover'
            />
          </div>
          <div>
            <h3 className='text-xl font-bold'>{agent.name}</h3>
            <p className='text-muted-foreground text-sm'>Agent</p>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <Phone className='h-5 w-5 text-primary' />
            <span>{agent.phone}</span>
          </div>
          <div className='flex items-center gap-3'>
            <Mail className='h-5 w-5 text-primary' />
            <span>{agent.email}</span>
          </div>
        </div>
        <Button className='w-full mt-6'>Contact Agent</Button>
      </CardContent>
    </Card>
  );
}
