interface Comment {
  id: number;
  email: string;
  name: string;
  body: string;
}

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url: string): Promise<Comment[]> => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<Comment[]>;
  });
};

getData(COMMENTS_URL)
  .then((data) => {
    data.forEach((comment) => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
