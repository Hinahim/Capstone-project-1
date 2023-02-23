import React from 'react'
import styles from './LeftBanner.module.css';
const LeftBanner = () => {
    return (

        <div className={styles.container}>
            <p className={styles.heading}>Already have an account?</p>
            <button className={styles.login}> LOGIN</button>
            <p className={styles.bottomheading}> Discover new things on </p>
            <p className={styles.bottomheading2}> Superapp</p>


        </div>
    )
}
export default LeftBanner;