import React from "react";
import Banner from "../../components/banner/Banner";
import img1 from "../../images/gallery/aic-meetup-main.png";
import img2 from "../../images/gallery/Data Science/data-science-main.png";
import img3 from "../../images/gallery/Mentorship/mentorship-main.png";
import img4 from "../../images/ourProjects2.jpg";
import {NavLink} from "react-router-dom";
import "./GalleryPage.css"

const dummyData={
  gallery_cards: [
    {
      id:1,
      image: img1,
      title: "AIC Meetup 2K18",
    },
    {
      id:2,
      image: img2,
      title: 'Workshop on "Python for Data Science"',
    },
    {
      id:3,
      image: img3,
      title: "AI Mentoring Session",
    },
    {
      id:4,
      image: img4,
      title: "Computer Vision Seminar",
    }
  ]
}

function GalleryPage() {

  const ShowGallery=dummyData.gallery_cards.map((data)=>{
    return(
        <div className="cards">
          <div className="cards-image">
            <img src={data.image}/>
          </div>
          ِ<div className="cards-text">
            <h3>{data.title}</h3>
            <NavLink
            to={`${data.id}`}
            state={data}
            className="btn btn-outline-dark"
            >
              Read More
            </NavLink>
          </div>
        </div>
    )
  })

  return (
    <div className="GalleryCards">
      <Banner title={"Gallery"} />
      <div className="cards-container">{ShowGallery}</div>
    </div>
  );
}

export default GalleryPage;
