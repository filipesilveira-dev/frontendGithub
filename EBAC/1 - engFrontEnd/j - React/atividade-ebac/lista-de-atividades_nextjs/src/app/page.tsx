// Server component por padrão
import ListaTarefasContainer from "@/components/ListaTarefasContainer";
import {tasks} from "@/lib/tasks";

export default function Home() {
  return (
    <>
    <ListaTarefasContainer tarefas = {tasks}/>
    </>
  )
}
