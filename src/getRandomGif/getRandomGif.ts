interface gifStructure {
  data: {
    embed_url: string;
  };
}

const getRandomGif = async (tagName: string): Promise<string> => {
  const apiKey = "CitIG6piYvQdiq9kHXgvFlg5uyoqyLwy";
  const giphyApiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tagName}&rating=g`;

  const response = await fetch(giphyApiUrl);
  const randomGif = (await response.json()) as gifStructure;

  return randomGif.data.embed_url;
};

export default getRandomGif;
