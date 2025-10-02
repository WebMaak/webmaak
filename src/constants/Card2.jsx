import { motion, useMotionValue, useTransform } from "framer-motion";
import cardData from "@/constants/cardData";
import "./Card2.css";
import { Star } from "lucide-react"; // Using Lucide icons for the star

const Card2 = ({
  id,
  rating,
  review,
  name,
  position,
  profileImage,
  cards,
  setCards,
}) => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const lastCardIndex = cards.length - 1;
  const secondLastCardIndex = cards.length - 2;

  const isFront = id === cards[lastCardIndex]?.id;
  const isSecondFront = id === cards[secondLastCardIndex]?.id;

  const rotate = useTransform(() => {
    if (isFront || isSecondFront) return "0deg";
    return id % 2 ? "6deg" : "-6deg";
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 50) {
      setCards((prevCards) => {
        const updatedCards = prevCards.filter((v) => v.id !== id);

        if (updatedCards.length === 0) {
          setTimeout(() => {
            setCards([...cardData]); // Reset after a short delay
          }, 100); // Delay allows animation to complete
        }

        return updatedCards;
      });

      // Reset motion values
      x.set(0);
      opacity.set(1);
    }
  };

  return (
    <motion.div
      className="framer-block"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? "4px 20px 25px -5px rgb(0 0 0 / 0.2), 0px 8px 10px -6px rgb(0 0 0 / 0.2)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.98 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      onDragEnd={handleDragEnd}
    >
      {/* Rating Section */}
      <div className="rating-section">
        <span className="rating">{rating} </span>
        <Star className="star-icon" size={16} fill="#f5c518" />
        <p className="rating-text">(Out of 5 stars)</p>
      </div>

      {/* Review */}
      <p className="review">{review}</p>

      {/* Quote Symbol */}
      <div className="quote-symbol">”</div>

      {/* User Info */}
      <div className="user-info">
        <div className="user-info-text">
          <h3 className="user-name">{name}</h3>
          <p className="user-position">{position}</p>
        </div>
        <img src={profileImage} alt={name} className="profile-image" />
      </div>
      <div className="bottom-bar"></div>
    </motion.div>
  );
};
export default Card2;
