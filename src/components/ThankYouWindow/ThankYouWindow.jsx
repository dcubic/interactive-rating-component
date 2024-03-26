import "./ThankYouWindow.css"
import starIcon from "../../assets/icon-star.svg"

export default function ThankYouWindow() {
    
    const ratingValues = [1, 2, 3, 4, 5];

    return (
        <main>
            <div className="image-container">
                <img src={starIcon}></img>
            </div>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
            <div className="button-container">
                {ratingValues.map(rating => (<button key={rating} className="selection-button">{rating}</button>))}
            </div>
            <button className="submit-button">Submit</button>
        </main>
    )
}