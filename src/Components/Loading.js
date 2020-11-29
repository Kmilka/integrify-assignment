import loading from "../images/loading.png";
function Loading() {
  return (
    <div className="flex">
      <img src={loading} alt="loading" className="rotation"></img>
    </div>
  );
}

export default Loading;
