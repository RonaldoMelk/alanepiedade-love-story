import { useEffect, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { getGuestMessages, addGuestMessage, type GuestMessage } from "@/lib/guest-book";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const GuestBook = () => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const { data: messages = [] } = useQuery<GuestMessage[]>({
    queryKey: ["guestMessages"],
    queryFn: getGuestMessages
  });

  const mutation = useMutation({
    mutationFn: (variables: { name: string; message: string }) => 
      addGuestMessage(variables.name, variables.message),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guestMessages"] });
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha seu nome e mensagem",
        variant: "destructive"
      });
      return;
    }

    try {
      await mutation.mutateAsync({ 
        name: name.trim(), 
        message: message.trim() 
      });

      setName("");
      setMessage("");
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado por deixar sua mensagem para o casal ❤️"
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema ao salvar sua mensagem. Por favor, tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Livro de Mensagens
          </h2>
          <p className="text-lg text-muted-foreground">
            Deixe uma mensagem especial para os noivos
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border mb-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg border-border focus:ring-primary"
              />
            </div>
            
            <div>
              <Textarea
                placeholder="Escreva sua mensagem para o casal..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="text-lg border-border focus:ring-primary resize-none"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              size="lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Enviar Mensagem
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Mensagens dos Convidados
          </h3>
          
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className="bg-secondary/30 rounded-xl p-6 border border-border"
            >
              <div className="flex justify-between items-start mb-3">
                <p className="font-semibold text-foreground">{msg.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(msg.created_at).toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
