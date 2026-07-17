import { useState } from "react";

interface AddLogProps {
  onAddLog: (title: string, description: string) => void;
}

export function AddLog({ onAddLog }: AddLogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAddLog(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Adicione um título</h4>
      <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" />
      <h4>Adicione uma descrição</h4>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="" id=""></textarea>
      <button type="submit">Salvar</button>
    </form>
  );
}
