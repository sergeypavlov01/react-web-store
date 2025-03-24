import styles from './FilterSection.module.css'

export const FilterSection = ({ filterSectionTitle, children }) => {
  return (
    <div className={styles.filter}>
      <h3 className={styles.filterSectionTitle}>{filterSectionTitle}</h3>
      {children}
    </div>
  )
}