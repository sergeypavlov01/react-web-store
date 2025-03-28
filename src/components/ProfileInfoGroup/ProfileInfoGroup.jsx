import styles from "./ProfileInfoGroup.module.css";

export const ProfileInfoGroup = ({ label, value, type, isGender = false, gender }) => {
  return (
    <div className={styles.infoGroup}>
      <label className={styles.labelName}>{label}:</label>
      {isGender ? (
        <div className={styles.genderOptions}>
          <label>
            <input type="radio" name="gender" value="male" defaultChecked={gender === 'male'}/> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" defaultChecked={gender === 'female'}/> Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" defaultChecked={gender === 'other'}/> Other
          </label>
        </div>
      ) : (
        <>
          <p>{value}</p>
          <input
            type={type}
            defaultValue={value}
            style={{display: 'none'}}
          />
        </>
      )}
    </div>
  );
};
