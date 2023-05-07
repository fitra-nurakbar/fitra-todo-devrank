import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import TodoList from "../components/TodoList";
import { useEffect } from "react";

export default function Detail() {
  const { VITE_BASE_URL, VITE_EMAIL } = import.meta.env;
  const { todoId } = useParams();

  const getTodo = async () => {
    try {
      const res = await fetch(
        `${VITE_BASE_URL}/todo-items?activity_group_id=${todoId}`
      );
      const json = await res.json();

      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <Layout>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur ipsum perspiciatis ut laborum similique id libero, voluptas blanditiis. Consequuntur?</div>
      <TodoList />
    </Layout>
  );
}
