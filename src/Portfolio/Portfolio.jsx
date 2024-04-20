import "./Portfolio.css";
import Card from "../Card/Card";

const cardData = [
  {
    id: 0,
    href: "",
    imageSource: "/weather-app.png",
    header: "Weather Wizard",
    text: "Weather Wizard is an innovative app built with TypeScript and React that offers a seamless way for users to stay informed about the weather in any city. Users can easily input the name of a city, and the app will fetch current weather data from a reliable API to provide up-to-date information on temperature, humidity, and weather conditions. The user-friendly interface allows people to quickly access the information they need. Additionally, the app includes a feature for sharing weather updates with friends, making it easy to keep others in the loop about the current weather in their area.",
  },
  {
    id: 0,
    href: "https://www.carterselectricalservices.co.uk/",
    imageSource: "/Screenshot 2024-03-06 at 18.36.16.png",
    header: "Drag & Drop Website",
    text: "A website created with a strong emphasis on user experience and user interface, crafted using a drag-and-drop service. This intuitive tool enabled me to build a visually appealing and highly functional site tailored to my client's specific needs. The website's design prioritises ease of navigation, ensuring users can find the information they seek without difficulty. By incorporating engaging elements and thoughtful layouts, the website delivers a seamless and enjoyable experience.",
  },
  {
    id: 0,
    imageSource: "/fireplace-palace.png",
    header: "Responsive Webpage using Next.js",
    text: "The webpage my team and I created for a fireplace company leverages Next.js using a mbile first appraoch to offer a seamless and engaging user experience.The webpage was designed with a modern aesthetic to draw in the customer. Visitors can easily read customer reviews, using an api, to learn more about the company's reputation and product quality. We also integrated a user-friendly booking form, making it simple for potential customers to schedule a consultation with just a few clicks.",
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
              href={eachItem.href}
              imageSource={eachItem.imageSource}
              header={eachItem.header}
              text={eachItem.text}
            />
          ))}
        </div>
        <div className="current-project">
          <div className="sub-heading">
            <h3>PROJECT IN PROGRESS ...</h3>
            <br />
            <h3>The Plant Bakery Co.</h3>
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
            <a
              href="https://www.figma.com/file/VS2i7xyTqiYhfv55VDLADe/Recipes-App?type=design&node-id=1147%3A8272&mode=design&t=x3kddYYQ8Xlt6jP0-1"
              target="_blank"
            >
              <img src="/recipes-app2.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
