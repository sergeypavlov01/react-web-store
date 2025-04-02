import { useNavigate } from "react-router";
import { useAuth } from "../../hook/useAuth";
import { ProfileInfoGroup } from "../ProfileInfoGroup/ProfileInfoGroup";
import styles from "./ProfileSection.module.css";

export const ProfileSection = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout(() => {
      navigate("/");
    })
  }

  return (
    <section className={styles.profile}>
      <h1 className={styles.title}>Account Profile</h1>

      <div className={styles.card}>
        <div className={styles.picture}>
          <img src={"images/" + user.avatar} alt="profile avatar" />
        </div>
        <div className={styles.info}>
          <ProfileInfoGroup label='Name' value={user.name} type='text'/>
          <ProfileInfoGroup label='Surname' value={user.surname} type='text'/>
          <ProfileInfoGroup label='Gender' isGender={true} gender={user.gender}/>
          <ProfileInfoGroup label='Date of Birth' value={user.dateOfBirth} type='data'/>
        </div>
        <div className={styles.actions}>
          <button className={styles.btn}>Edit</button>
          <button className={styles.btn} style={{display: "none"}}>Save</button>
          <button onClick={handleClick} className={`${styles.btn} ${styles.btnLogout}`}>Logout</button>
        </div>
      </div>
    </section>
  );
};
