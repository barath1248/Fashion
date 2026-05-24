import './caurosel.css';
export function Carousel() {
  return (
    <div className="carousel">

      <div className="card left-card">
        <img src="/caurosel_1.jpg" alt="" />
      </div>

      <div className="card middle-card">
        <img src="/caurosel_2.jpg" alt="" />

        <div className="overlay">
          <h1>NEW COLLECTION</h1>
          <p>Modern Fashion 2026</p>
          <button>Shop Now</button>
        </div>
      </div>

      <div className="card right-card">
        <img src="/caurosel_3.jpg" alt="" />
      </div>

    </div>
  );
}