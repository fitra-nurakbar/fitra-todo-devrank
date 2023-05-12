import ActivityList from "@/components/ActivityList";
import Alert from "@/components/Alert";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";
import Layout from "@/components/Layout";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import ActivityHeader from "../components/ActivityHeader";

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
  const [alertMessage, setAlertMessage] = useState("");

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
      setAlertMessage("Gagal memuat data!!!");
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
      setAlertMessage("Gagal mengirim data!!!");
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
      setAlertMessage("Activity berhasil dihapus");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // open modal
  function openDeleteModal(id, title) {
    setActivitySelected({ id, title });
    console.log(id, title)

    setDeleteModalOpen(true);
  }
  // close modal
  function closeDeleteModal() {
    setActivitySelected({ id: null, title: null });
    setDeleteModalOpen(false);
  }
  // close alert
  function closeAlert() {
    setAlertMessage("");
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <Layout>
      <ActivityHeader onClick={createActivity} />
      {/* alert conditional */}
      {alertMessage && <Alert closeAlert={closeAlert} message={alertMessage} />}
      {/* loading conditional & rendering data */}
      {loading ? (
        <Loading />
      ) : (
        <ActivityList data={activities} openModal={openDeleteModal} addActivity={createActivity} />
      )}
      {/* modal delete confirm */}
      {deleteModalOpen && (
        <DeleteConfirmModal type={"activity"} selected={activitySelected} closeModal={closeDeleteModal} onDelete={deleteActivity} />
      )}
    </Layout>
  );
}
