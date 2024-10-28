/* eslint-disable react/prop-types */
export default function TabBtn({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
