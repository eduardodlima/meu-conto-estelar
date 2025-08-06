import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    personagem: "",
    sonho: "",
    valor: "",
  });
  const [historia, setHistoria] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const gerarHistoria = () => {
    const { nome, idade, personagem, sonho, valor } = formData;
    const story = `Era uma vez um(a) pequeno(a) sonhador(a) chamado(a) ${nome}, de ${idade} anos. Certo dia, ele(a) conheceu ${personagem}, um ser mágico que apareceu em um sonho para guiá-lo(a) em uma aventura especial. Juntos, partiram em busca de ${sonho}, mas a verdadeira missão era descobrir o poder de ${valor}, que vivia escondido dentro do coração de ${nome}. Com coragem e amor, ${nome} aprendeu que os maiores sonhos se tornam reais quando guiados pela alma. E assim, uma nova estrela brilhou no céu: a de ${nome}, o(a) sonhador(a) do infinito.`;
    setHistoria(story);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
        Meu Conto Estelar
      </h1>
      <Card className="max-w-xl mx-auto mb-6 shadow-xl">
        <CardContent className="space-y-4 p-6">
          <Input
            name="nome"
            placeholder="Nome da criança"
            value={formData.nome}
            onChange={handleChange}
          />
          <Input
            name="idade"
            placeholder="Idade"
            value={formData.idade}
            onChange={handleChange}
          />
          <Input
            name="personagem"
            placeholder="Personagem mágico preferido"
            value={formData.personagem}
            onChange={handleChange}
          />
          <Input
            name="sonho"
            placeholder="Um sonho ou desejo da criança"
            value={formData.sonho}
            onChange={handleChange}
          />
          <Input
            name="valor"
            placeholder="Um valor espiritual (amor, coragem...)"
            value={formData.valor}
            onChange={handleChange}
          />
          <Button className="w-full mt-4" onClick={gerarHistoria}>
            Gerar história
          </Button>
        </CardContent>
      </Card>
      {historia && (
        <Card className="max-w-xl mx-auto mt-6 bg-white shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">
            Sua História
          </h2>
          <p className="text-gray-800 whitespace-pre-line">{historia}</p>
        </Card>
      )}
    </div>
  );
}
