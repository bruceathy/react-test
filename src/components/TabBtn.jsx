/* eslint-disable react/prop-types */
export default function TabBtn({ children }) {
  function handleClick() {
    alert("clicked");
  }
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
