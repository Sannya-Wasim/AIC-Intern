import React from "react";
import Banner from "../../components/banner/Banner";
import "./EventsPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function EventsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Banner title={"EVENTS"} />
      <div className="cards-container">
        {events.map(({ id, title, summary, timing, img }) => (
          <div
            className="cards"
            onClick={() => {
              navigate("/events/" + id);
            }}
          >
            <div className="cards-image">
              <img src={img} alt="" />
            </div>
            <div className="cards-text">
              <h4>{title}</h4>
              <p className="timing">{timing}</p>
              <p className="summary">{summary.substring(0, 100)}...</p>
              <button className="btn btn-outline-dark">
                <Link to={`${events / id}`}>Read More &#187;</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export const events = [
  {
    id: 0,
    title: "AI FEST 3.0",
    img: require("../../images/home1.jpg"),
    summary:
      "Lorem ipsum, dlor sit amet consectetur adipisicing elit. Nostrum non officia nemo id. Explicabo nihil possimus, hic veritatis temporibus labore mollitia unde assumenda! Eos possimus neque placeat, numquam architecto quam!",
    timing: "10th DECEMBER,2021",
  },
  {
    id: 1,
    title: "AI FEST 3.0 ",
    img: require("../../images/home1.jpg"),
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum non officia nemo id. Explicabo nihil possimus, hic veritatis temporibus labore mollitia unde assumenda! Eos possimus neque placeat, numquam architecto quam!",
    timing: "10th DECEMBER,2021",
  },
  {
    id: 2,
    title: "AI FEST 3.0",
    img: require("../../images/home1.jpg"),
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum non officia nemo id. Explicabo nihil possimus, hic veritatis temporibus labore mollitia unde assumenda! Eos possimus neque placeat, numquam architecto quam!",
    timing: "10th DECEMBER,2021",
  },
  {
    id: 3,
    title: "AI FEST 3.0 ",
    img: require("../../images/home1.jpg"),
    summary:
      "Lorem ipsum, dlor sit amet consectetur adipisicing elit. Nostrum non officia nemo id. Explicabo nihil possimus, hic veritatis temporibus labore mollitia unde assumenda! Eos possimus neque placeat, numquam architecto quam!",
    timing: "10th DECEMBER,2021",
  },
  {
    id: 4,
    title: "AI FEST 3.0 ",
    img: require("../../images/home1.jpg"),
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum non officia nemo id. Explicabo nihil possimus, hic veritatis temporibus labore mollitia unde assumenda! Eos possimus neque placeat, numquam architecto quam!",
    timing: "10th DECEMBER,2021",
  },
  {
    id: 5,
    title: "AI FEST 3.0",
    img: require("../../images/home1.jpg"),
    summary:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum non officia nemo id. Explicabo nihil possimus, hic veritatis temporibus labore mollitia unde assumenda! Eos possimus neque placeat, numquam architecto quam!",
    timing: "10th DECEMBER,2021",
  },
];

export default EventsPage;
