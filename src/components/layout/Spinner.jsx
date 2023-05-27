import spinner from './assets/loading-gif.gif'

function Spinner() {
  return (
    <div className="w-100 mt-20 ">
      <img src={spinner} alt="loading" width={180} className="mx-auto" />
    </div>
  );
}
export default Spinner