import styles from "./SelectionWindow.module.css"
import starIcon from "../../assets/icon-star.svg"

export default function SelectionWindow(props) {
    function handleSelectionClick(selectedRating) {
        props.setRatingState(selectedRating);
    }

    function handleSubmitClick() {
        if (props.ratingState != undefined) {
            props.setHasSubmittedState(true);
        }
    }
    
    return (
        <main className={styles['background-panel']}>
            <div className={styles["image-container"]}>
                <img src={starIcon} className={styles['image-styling']}></img>
            </div>
            <h1 className={`${styles['white-font']} ${styles['header-size']}`}>How did we do?</h1>
            <p className={`${styles['white-font']} ${styles['paragraph']}`}>Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!</p>
            <div className={styles['button-container']}>
                {
                    props.ratingValues.map(rating => 
                        (
                            <button 
                                key={rating} 
                                className={`${styles["selection-button"]} ${props.ratingState === rating ? styles.selected : ''}`} 
                                onClick={() => handleSelectionClick(rating)}
                            >
                                {rating}
                            </button>
                        )
                    )
                }
            </div>
            <button 
                onClick={handleSubmitClick}
                className={styles['submit-button']}
            >Submit</button>
        </main>
    )
}