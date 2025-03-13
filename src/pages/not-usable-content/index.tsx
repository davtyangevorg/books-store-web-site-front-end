import { getNotUsableContent } from "./helpers";

const NotUsableContent = () => {
  const notUsableContent = getNotUsableContent();

  console.log(notUsableContent);
  return (
    <div>
      <h1>Not Usable Content</h1>
      <p>This content is not usable</p>
    </div>
  );
};

export default NotUsableContent;
