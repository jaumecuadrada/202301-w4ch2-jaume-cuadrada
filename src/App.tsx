import { useState } from "react";
import Form from "./components/Form/Form";
import "./css/styles.css";
import getRandomGif from "./getRandomGif/getRandomGif";

const App = (): JSX.Element => {
  const [gifLink, setGifLink] = useState("");

  const captureTag = async (tag: string) => {
    const randomGif = await getRandomGif(tag);
    setGifLink(randomGif);
  };

  return (
    <div className="container">
      <Form captureTag={captureTag} />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src="" className="gif" alt="" />
          <iframe
            src={gifLink}
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            title="mainGif"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
