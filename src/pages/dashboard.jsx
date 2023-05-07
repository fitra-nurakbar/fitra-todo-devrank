import styles from "@/styles/Dashboard.module.css";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ActivityList from "@/components/ActivityList";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import DeleteModal from "@/components/DeleteModal";
import Alert from "@/components/Alert";

export default function Dashboard() {
  const { VITE_BASE_URL, VITE_EMAIL } = import.meta.env;
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    title: "New Activity",
    email: VITE_EMAIL,
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [activitySelected, setActivitySelected] = useState({
    id: null,
    title: null,
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  // get activity
  const getActivity = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${VITE_BASE_URL}/activity-groups?email=${VITE_EMAIL}`
      );
      const json = await res.json();
      const data = await json.data;

      setActivities(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // post activity
  const createActivity = async () => {
    setLoading(true);
    try {
      await fetch(`${VITE_BASE_URL}/activity-groups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newActivity),
      });

      getActivity();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // delete activity
  const deleteActivity = async (id) => {
    setLoading(true);
    try {
      await fetch(`${VITE_BASE_URL}/activity-groups/${id}`, {
        method: "DELETE",
      });

      getActivity();

      closeDeleteModal();
      setAlert(true);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  function openDeleteModal(id, title) {
    setActivitySelected({ id, title });

    setDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setActivitySelected({ id: null, title: null });
    setDeleteModalOpen(false);
  }

  function closeAlert() {
    setAlert(false);
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <Layout>
      <div className={styles.todoHeader}>
        <h2>Activity</h2>
        <Button onClick={createActivity}>tambah</Button>
      </div>
      {alert && <Alert closeAlert={closeAlert} />}
      {loading ? (
        <Loading />
      ) : (
        <ActivityList data={activities} openModal={openDeleteModal} />
      )}
      {deleteModalOpen && (
        <DeleteModal
          type={"activity"}
          selected={activitySelected}
          closeModal={closeDeleteModal}
          onDelete={deleteActivity}
        />
      )}
    </Layout>
  );
}
