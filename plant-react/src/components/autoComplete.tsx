import { useState } from "react";

type AutocompleteProps<T> = {
  items: T[];
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
  placeholder?: string;
};

export function Autocomplete<T>({
  items,
  getLabel,
  onSelect,
  placeholder = "Buscar...",
}: AutocompleteProps<T>) {
  const [inputValue, setInputValue] = useState("");
  const [focused, setFocused] = useState(false);

  const filteredItems = items.filter(item =>
    getLabel(item).toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 100)}
        className="w-full p-3 border rounded-xl pr-10"
      />
      {inputValue && (
        <button
          onClick={() => setInputValue("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
          aria-label="Limpar busca"
        >
          ✕
        </button>
      )}
      {focused && filteredItems.length > 0 && (
        <ul className="absolute z-10 bg-white border w-full mt-1 rounded-xl shadow-lg max-h-60 overflow-auto">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-green-100 cursor-pointer"
              onClick={() => {
                onSelect(item);
                setInputValue(getLabel(item));
                setFocused(false);
              }}
            >
              {getLabel(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
