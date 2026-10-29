import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice.jsx";

const plants = [
  {
    id: "snake-plant",
    name: "Snake Plant",
    category: "Easy Care",
    price: 499,
    description: "A hardy, sculptural plant that suits beginners.",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    category: "Easy Care",
    price: 599,
    description: "Glossy leaves and a forgiving nature.",
    image: "https://images.unsplash.com/photo-1632207691143-643e2b094e7d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pothos",
    name: "Golden Pothos",
    category: "Easy Care",
    price: 349,
    description: "Trailing green leaves for shelves and hanging pots.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    category: "Easy Care",
    price: 299,
    description: "Arching striped leaves that brighten any corner.",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "jade-plant",
    name: "Jade Plant",
    category: "Easy Care",
    price: 399,
    description: "A compact succulent with plump green leaves.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "peace-lily",
    name: "Peace Lily",
    category: "Easy Care",
    price: 649,
    description: "Elegant deep-green foliage and white blooms.",
    image: "https://images.unsplash.com/photo-1597055181300-a8b7be6f4c1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    category: "Statement Plants",
    price: 899,
    description: "Large split leaves make a bold statement.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rubber-plant",
    name: "Rubber Plant",
    category: "Statement Plants",
    price: 799,
    description: "Rich, glossy leaves with a dramatic look.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fiddle-leaf",
    name: "Fiddle Leaf Fig",
    category: "Statement Plants",
    price: 1299,
    description: "Bold violin-shaped leaves for bright rooms.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "areca-palm",
    name: "Areca Palm",
    category: "Statement Plants",
    price: 999,
    description: "Feathery fronds bring a tropical feel indoors.",
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bird-paradise",
    name: "Bird of Paradise",
    category: "Statement Plants",
    price: 1499,
    description: "Upright tropical foliage with a striking silhouette.",
    image: "https://images.unsplash.com/photo-1597055181300-a8b7be6f4c1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "calathea",
    name: "Calathea Orbifolia",
    category: "Statement Plants",
    price: 899,
    description: "Rounded leaves with beautiful silver-green stripes.",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "anthurium",
    name: "Anthurium",
    category: "Flowering Plants",
    price: 699,
    description: "Shiny leaves and colourful, heart-shaped blooms.",
    image: "https://images.unsplash.com/photo-1597055181300-a8b7be6f4c1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "orchid",
    name: "Phalaenopsis Orchid",
    category: "Flowering Plants",
    price: 799,
    description: "Graceful blooms for a bright windowsill.",
    image: "https://images.unsplash.com/photo-1566929300425-1f1a5b8b9b44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bromeliad",
    name: "Bromeliad",
    category: "Flowering Plants",
    price: 749,
    description: "A tropical plant with a vivid central colour.",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "african-violet",
    name: "African Violet",
    category: "Flowering Plants",
    price: 299,
    description: "A small flowering plant for desks and side tables.",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kalanchoe",
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 349,
    description: "A cheerful succulent with clusters of flowers.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hibiscus",
    name: "Indoor Hibiscus",
    category: "Flowering Plants",
    price: 599,
    description: "Bright tropical blooms for a sunny spot.",
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["Easy Care", "Statement Plants", "Flowering Plants"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-container products-page">
      <header className="page-heading">
        <p className="eyebrow">Find your new favourite</p>
        <h1>Shop Houseplants</h1>
        <p>Bring home a little more green. Choose a plant for every corner.</p>
      </header>

      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <article className="plant-card" key={plant.id}>
                  <img
                    className="plant-image"
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="plant-card-content">
                    <h3>{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">₹{plant.price.toLocaleString("en-IN")}</p>
                    <button
                      className="button button-primary"
                      type="button"
                      disabled={addedIds.has(plant.id)}
                      onClick={() => dispatch(addToCart(plant))}
                    >
                      {addedIds.has(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
