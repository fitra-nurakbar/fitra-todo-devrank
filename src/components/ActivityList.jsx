import DeleteIcon from "/static/media/activity-item-delete-button.svg";
import ActivityEmptyImage from "/static/media/activity-empty-state.png";
import styles from "@/styles/ActivityList.module.css";
import { Link } from "react-router-dom";

export default function ActivityList({ data, openModal }) {
  const strDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  return (
    <>
      {data.length > 0 ? (
        <div className={styles.containerCard}>
          {data.map((activity, index) => (
            <div className={styles.card} key={index}>
              <Link to={`/detail/${activity.id}`}>
                <div className={styles.cardBody}>
                  <h3>{activity.title}</h3>
                </div>
              </Link>
              <div className={styles.cardFooter}>
                <span>{strDate(activity.created_at)}</span>
                <img
                  src={DeleteIcon}
                  alt="delete"
                  data-cy="activity-item-delete-button"
                  onClick={() => openModal(activity.id, activity.title)}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyItem}>
          <img src={ActivityEmptyImage} alt="activity empty" />
        </div>
      )}
    </>
  );
}
