import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabNames = ["Family", "Events", "Friends", "Lifestyle", "Portraits"];

  const portfolioImage = [
    {
      image_01: "https://images.pexels.com/photos/18418234/pexels-photo-18418234/free-photo-of-a-building-with-many-balconies-and-windows.jpeg",
      image_02: "https://images.pexels.com/photos/11119772/pexels-photo-11119772.jpeg",
      image_03: "https://images.pexels.com/photos/1317345/pexels-photo-1317345.jpeg"
    },
    {
      image_01: "https://images.pexels.com/photos/6064284/pexels-photo-6064284.jpeg",
      image_02: "https://images.pexels.com/photos/11119772/pexels-photo-11119772.jpeg",
      image_03: "https://images.pexels.com/photos/9353471/pexels-photo-9353471.jpeg"
    },
    {
      image_01: "https://images.pexels.com/photos/18418234/pexels-photo-18418234/free-photo-of-a-building-with-many-balconies-and-windows.jpeg",
      image_02: "https://images.pexels.com/photos/11119772/pexels-photo-11119772.jpeg",
      image_03: "https://images.pexels.com/photos/1317345/pexels-photo-1317345.jpeg"
    },
    {
      image_01: "https://images.pexels.com/photos/18418234/pexels-photo-18418234/free-photo-of-a-building-with-many-balconies-and-windows.jpeg",
      image_02: "https://images.pexels.com/photos/11119772/pexels-photo-11119772.jpeg",
      image_03: "https://images.pexels.com/photos/1317345/pexels-photo-1317345.jpeg"
    },
    {
      image_01: "https://images.pexels.com/photos/18418234/pexels-photo-18418234/free-photo-of-a-building-with-many-balconies-and-windows.jpeg",
      image_02: "https://images.pexels.com/photos/11119772/pexels-photo-11119772.jpeg",
      image_03: "https://images.pexels.com/photos/1317345/pexels-photo-1317345.jpeg"
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-12 w-[90%] flex flex-col gap-8" id="portfolio">
      <h2 className='regular-42'>Portfolio</h2>
      <div className="content-column flex gap-12">
        <div className="tabs-container">
          <div className="tabs w-full border-b-[1px]">
            {tabNames.map((name, index) => (
              <div
                key={index}
                className={`tab ${index === activeTab ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="images-container flex flex-col gap-6">
            <div className="flex gap-6">
              {Object.values(portfolioImage[activeTab]).slice(0, 2).map((imageUrl, index) => (
                <div className="image-container" key={index}>
                  <img src={imageUrl} alt={`Portfolio ${index + 1}`} className="my-portfolio-images" />
                </div>
              ))}
            </div>
            <div className="flex">
              {Object.values(portfolioImage[activeTab]).slice(2).map((imageUrl, index) => (
                <div className="image-container" key={index + 3}>
                  <img src={imageUrl} alt={`Portfolio ${index + 4}`} className="my-portfolio-images-main" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/4033244/pexels-photo-4033244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Man photography" />
      </div>
    </div>
  );
};

export default Tabs;
