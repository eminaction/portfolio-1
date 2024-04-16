import "./Portfolio.css";
import Card from "../Card/Card";

const cardData = [
  {
    id: 0,
    imageSource: "/Screenshot 2024-02-27 at 16.13.58.png",
    header: "Weather App",
    text: "Call a weather API and use the fetched data to display the weather in London, incuding the current temperature, sunset and sunrise times and the weather throughout the day.",
  },
  {
    id: 0,
    imageSource: "/Screenshot 2024-03-06 at 18.36.16.png",
    header: "Drag & Drop Website",
    text: 'Call us and book in a "Design Consultation" on a date and time to suit you.',
  },
  {
    id: 0,
    imageSource: "/Screenshot 2024-03-25 at 15.58.33.png",
    header: "Responsive Webpage using Next.js",
    text: 'Call us and book in a "Design Consultation" on a date and time to suit you.',
  },
];

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="portfolio">
        <div className="heading">
          <h1>RECENT PROJECTS</h1>
        </div>
        <div className="cards-only">
          {cardData.map((eachItem) => (
            <Card
              key={eachItem.id}
              imageSource={eachItem.imageSource}
              header={eachItem.header}
              text={eachItem.text}
            />
          ))}
        </div>
        <div className="current-project">
          <div className="sub-heading">
            <h3>PROJECT IN PROGRESS ...</h3>
            <p>
              I counter balance my love of health and fitness, with a passion
              for baking. There is nothing better than a freshly made cake or
              brownies, so why not create an app designated to one of my
              favourite hobbies. <br />
              <br />
              Introducing The Plant Bakery Co. An all plant-based cookbook of
              all my favorutie sweet recipes! This app is made using wireframing
              and prototyping from Figma, and using Next.js.
            </p>
          </div>
          <div className="current-image">
            <img src="/recipes-app2.png" />
          </div>
        </div>
      </div>
    </>
  );
}
