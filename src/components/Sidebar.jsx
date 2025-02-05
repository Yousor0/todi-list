import { useState, useCallback } from "react";
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @param {Object} props
 * @param {string[]} props.initialMenuItems
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems);
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");

  console.log("Initial menu items", initialMenuItems);
  // TODO 3: Implement addMenuItem to update state with new item
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") {
      setMenuItems((preveMenuItems) => [newMenuItem, ...preveMenuItems]);
      setNewMenuItem("");
    }
  }, [newMenuItem, setMenuItems]);

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  let filteredMenuItems = menuItems.filter((item) =>
    new RegExp(filter, "i").test(item)
  );

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />

      <button onClick={addMenuItem}>Add Item</button>
      <br />

      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

      {/* TODO 1: Render unordered list of filtered menu items */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
