import { useState } from "react";

interface AddLogProps {
  onAddLog: (title: string, description: string) => void;
}

export function AddLog({ onAddLog }: AddLogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAddLog(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label className="form-label">Adicione um título</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-input"
          placeholder="Ex: Entrada no diário..."
        />
      </div>
      <div className="form-group">
        <label className="form-label">Adicione uma descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="form-textarea"
          placeholder="Escreva os acontecimentos do dia..."
        ></textarea>
      </div>
      <button type="submit" className="btn-submit">Salvar Registro</button>
    </form>
  );
}

