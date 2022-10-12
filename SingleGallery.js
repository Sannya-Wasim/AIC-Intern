import React from "react";
import Masonry from "react-masonry-css";
import "./GalleryPage.css";
import Banner from "../../components/banner/Banner";
import img1 from "../../images/gallery/aic-meetup-01.png";
import img2 from "../../images/gallery/aic-meetup-02.png";
import img3 from "../../images/gallery/aic-meetup-03.png";
import img4 from "../../images/gallery/aic-meetup-04.png";
import img5 from "../../images/gallery/aic-meetup-05.png";
import img6 from "../../images/gallery/aic-meetup-06.png";
import img7 from "../../images/gallery/aic-meetup-07.png";
import img8 from "../../images/gallery/aic-meetup-08.png";
import img9 from "../../images/gallery/aic-meetup-09.png";
import img10 from "../../images/gallery/aic-meetup-10.png";
import img11 from "../../images/gallery/aic-meetup-11.png";
import img12 from "../../images/gallery/aic-meetup-12.png";
import img13 from "../../images/gallery/aic-meetup-13.png";

const images = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
  {
    id: 7,
    image: img7,
  },
  {
    id: 8,
    image: img8,
  },
  {
    id: 9,
    image: img9,
  },
  {
    id: 10,
    image: img10,
  },
  {
    id: 11,
    image: img11,
  },
  {
    id: 12,
    image: img12,
  },
  {
    id: 13,
    image: img13,
  },
];

function SingleGallery() {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const masonryOptions={
    fitWidth:false,
    columnWidth: 300,
    gutter: 30,
    itemSelector: ".image-list"
  }

  return (
    <div className="SingleGallery">
        <Banner title={"Gallery"}/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoaded={false}
      >
        {images.map((img)=>{
            return(
                <div key={img.id} className="image-list"><img src={img.image}/></div>
            )
        })}
      </Masonry>
    </div>
  );
}

export default SingleGallery;
