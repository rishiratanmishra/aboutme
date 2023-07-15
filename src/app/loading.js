import React from 'react'
import styles from'../styles/loading.module.css'
const loading = () => {
  return (
    <>
    <div className={styles.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    
    </>)
}

export default loading