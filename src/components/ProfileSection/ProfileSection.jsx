import styles from "./ProfileSection.module.css";
import { useFetching } from "../../hook/useFetching";
import { useNavigate } from "react-router";
import { useAuth } from "../../hook/useAuth";
import { changeUserProfile } from "../../api";
import { ProfileInfoGroup } from "../ProfileInfoGroup/ProfileInfoGroup";
import { useEffect, useRef, useState } from "react";

export const ProfileSection = () => {
  const form = useRef(null);
  const { user, logout } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  // const [fetchData, error, isLoading] = useFetching(async () => {
  //   const formData = new FormData(form.current);
  //   const newData = {...user}
  //   for (let [key, value] of formData.entries()) {
  //     newData[key] = value;
  //   }

  //   const res = await changeUserProfile(user.id, newData);

  //   if (!res.ok) {
  //     throw new Error('Change Error');
  //   }

  //   console.log(await res.json());
  // })

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => {
      navigate("/");
    });
  };

  const handleEditProfile = () => {
    setIsEdit(!isEdit);
  };

  const handleChangeProfile = async () => {
    // fetchData()
  };

  return (
    <section className={styles.profile}>
      <h1 className={styles.title}>Account Profile</h1>

      <div className={styles.card}>
        <div className={styles.picture}>
          <img src={"images/" + user.avatar} alt="profile avatar" />
        </div>
        <form ref={form}>
          <div className={styles.info}>
            <ProfileInfoGroup
              label="Name"
              value={user.name}
              type="text"
              name='name'
              isEdit={isEdit}
            />
            <ProfileInfoGroup
              label="Surname"
              value={user.surname}
              type="text"
              name='surname'
              isEdit={isEdit}
            />
            <ProfileInfoGroup
              label="Gender"
              isGender={true}
              gender={user.gender}
            />
            <ProfileInfoGroup
              label="Date of Birth"
              value={user.dateOfBirth}
              type="data"
              name='dateOfBirth'
              isEdit={isEdit}
            />
          </div>
        </form>
        <div className={styles.actions}>
          <button onClick={handleEditProfile} className={styles.btn}>
            Edit
          </button>
          <button
            onClick={handleChangeProfile}
            className={styles.btn}
            style={isEdit ? { display: "block" } : { display: "none" }}
          >
            Save
          </button>
          <button
            onClick={handleLogout}
            className={`${styles.btn} ${styles.btnLogout}`}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};
