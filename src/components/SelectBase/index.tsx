import * as React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import { PiCaretDownLight, PiCaretUpLight } from "react-icons/pi";
import unidecode from "unidecode";

interface SelectWithFilterDropdown {
  data: string[];
  currentData: string;
  setData: any;
  label?: string;
  errorMessage?: string;
  placeHolder?: string;
}
const SelectWithFilter = ({
  data,
  currentData,
  setData,
  errorMessage,
  label,
  placeHolder,
}: SelectWithFilterDropdown) => {
  const [showDropdown, setDropdown] = React.useState<boolean>(false);
  const [listItem, setListItem] = React.useState<string[]>(data);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleClickInput = () => {
    setDropdown(!showDropdown);
  };

  const handleClickItem = (item: string) => {
    setData(item);
  };

  const handleChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  React.useEffect(() => {
    if (searchValue !== "") {
      const normalizedSearchValue = unidecode(searchValue.toLowerCase());
      const filteredItems = listItem.filter((item) => {
        const normalizedItem = unidecode(item.toLowerCase());
        return normalizedItem.includes(normalizedSearchValue);
      });
      setListItem(filteredItems);
    } else {
      setListItem(data);
    }
  }, [searchValue, data]);

  React.useEffect(() => {
    if (!showDropdown) {
      setSearchValue("");
    }
  }, [showDropdown]);

  React.useEffect(() => {
    setListItem(data);
  }, [data]);

  React.useEffect(() => {
    setDropdown(false);
  }, [currentData]);

  return (
    <div className="select-input-container">
      <span>{label}</span>
      <div className="select-input-field">
        <input
          value={currentData}
          onClick={handleClickInput}
          readOnly
          placeholder={placeHolder}
        />
        <div className="input-icon">
          {showDropdown ? <PiCaretDownLight /> : <PiCaretUpLight />}
        </div>
      </div>

      <span className="label-input">{errorMessage}</span>

      {showDropdown && (
        <div className="select-dropdown">
          <div className="filter-wrapper">
            <input
              value={searchValue}
              onChange={(event) => handleChangeSearch(event.target.value)}
              placeholder="Nhập để tìm kiếm..."
            />
            <div className="input-icon">
              <FaSearch />
            </div>
          </div>

          <ul>
            {listItem.map((item, index) => (
              <li key={index} onClick={() => handleClickItem(item)}>
                <span>{item}</span>
                <input
                  type="radio"
                  name="item"
                  value={item}
                  checked={currentData === item}
                  onChange={() => {}}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default SelectWithFilter;
