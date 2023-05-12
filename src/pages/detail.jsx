import Alert from "@/components/Alert";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import TodoHeader from "@/components/TodoHeader";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormModal from "../components/FormModal";

export default function Detail() {
  const { VITE_BASE_URL, VITE_EMAIL } = import.meta.env;
  const { todoId } = useParams();
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    activity_group_id: todoId,
    priority: "very-high",
  });

  const getTodos = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${VITE_BASE_URL}/todo-items?activity_group_id=${todoId}`
      );
      const json = await res.json();
      const data = await json.data;

      setTodos(data);
      setLoading(false);
    } catch (err) {
      setAlertMessage("Gagal memuat data!!!");
      setLoading(false);
    }
  };

  const createTodo = async () => {
    setLoading(true);
    try {
      // await fetch(`${VITE_BASE_URL}/todo-items`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(newTodo),
      // })

      console.log("berhasil");

      closeFormModal();
      setLoading(false);
    } catch (err) {
      setAlertMessage("Gagal mengirim data!!!");
      setLoading(false);
    }
  };

  const openFormModal = () => {
    setFormModalOpen(true);
  };

  const closeFormModal = () => {
    setNewTodo({
      title: "",
      activity_group_id: todoId,
      priority: "very-high",
    });
    setFormModalOpen(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Layout>
      <TodoHeader onClick={openFormModal} />
      {/* alert conditional */}
      {alertMessage && <Alert closeAlert={closeAlert} message={alertMessage} />}
      {/* loading conditional & rendering data */}
      {loading ? (
        <Loading />
      ) : (
        <TodoList data={todos} openFormModal={openFormModal} />
      )}
      {/* modal form create todo item */}
      {formModalOpen && (
        <FormModal
          closeModal={closeFormModal}
          setNewTodo={setNewTodo}
          createTodo={createTodo}
        />
      )}
    </Layout>
  );
}
