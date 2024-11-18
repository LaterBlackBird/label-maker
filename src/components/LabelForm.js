// src/components/LabelForm.js
import { useState, useEffect } from "react";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function LabelForm({ onChange }) {
  const [sizeOption, setSizeOption] = useState("3x5");
  const [customSize, setCustomSize] = useState({ width: 300, height: 100 });
  const [model, setModel] = useState("BRN18CL");
  const [title, setTitle] = useState("Red Brass Coupling");
  const [subtitle, setSubtitle] = useState('1/8" x CLOSE');
  const [details, setDetails] = useState("• Schedule 40\nRed Brass");
  const [quantity, setQuantity] = useState(25);
  const [origin, setOrigin] = useState("Taiwan");
  const [partNumber, setPartNumber] = useState("H88500");
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    onChange({
      size: sizeOption === "custom" ? customSize : getSize(sizeOption),
      model,
      title,
      subtitle,
      details,
      quantity,
      origin,
      partNumber,
    });
  }, [
    sizeOption,
    customSize,
    model,
    title,
    subtitle,
    details,
    quantity,
    origin,
    partNumber,
  ]);

  const handleSizeOptionChange = (e) => {
    setSizeOption(e.target.value);
  };

  const handleCustomSizeChange = (e) => {
    const { name, value } = e.target;
    const newValue = value === "" ? 0 : parseInt(value, 10);
    setCustomSize((prevSize) => ({ ...prevSize, [name]: newValue }));
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleOriginChange = (e) => {
    const value = e.target.value;
    setOrigin(value);
    setFilteredCountries(
      countries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const getSize = (option) => {
    switch (option) {
      case "3x5":
        return { width: 500, height: 300 };
      case "3x10":
        return { width: 1000, height: 300 };
      default:
        return { width: 300, height: 100 };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            value={model}
            onChange={handleInputChange(setModel)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Part Number
          </label>
          <input
            type="text"
            value={partNumber}
            onChange={handleInputChange(setPartNumber)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={handleInputChange(setTitle)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Subtitle
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={handleInputChange(setSubtitle)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange(setQuantity)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country of Origin
          </label>
          <input
            type="text"
            value={origin}
            onChange={handleOriginChange}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            list="country-list"
          />
          <datalist id="country-list">
            {filteredCountries.map((country) => (
              <option key={country} value={country} />
            ))}
          </datalist>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Details
          </label>
          <textarea
            value={details}
            onChange={handleInputChange(setDetails)}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSizeOption("3x5")}
            >
              <input
                type="radio"
                value="3x5"
                checked={sizeOption === "3x5"}
                onChange={handleSizeOptionChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                3&quot; x 5&quot;
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSizeOption("3x10")}
            >
              <input
                type="radio"
                value="3x10"
                checked={sizeOption === "3x10"}
                onChange={handleSizeOptionChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                3&quot; x 10&quot;
              </label>
            </div>
          </div>
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setSizeOption("custom")}
            >
              <input
                type="radio"
                value="custom"
                checked={sizeOption === "custom"}
                onChange={handleSizeOptionChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label className="ml-3 block text-sm font-medium text-gray-700">
                Custom Size
              </label>
            </div>
          </div>
        </div>
        {sizeOption === "custom" && (
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Width:
              </label>
              <input
                type="number"
                name="width"
                value={customSize.width || ""}
                onChange={(e) =>
                  handleCustomSizeChange({
                    target: { name: "width", value: e.target.value },
                  })
                }
                min="200"
                className="ml-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium text-gray-700">
                Height:
              </label>
              <input
                type="number"
                name="height"
                value={customSize.height || ""}
                onChange={(e) =>
                  handleCustomSizeChange({
                    target: { name: "height", value: e.target.value },
                  })
                }
                min="100"
                className="ml-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Label
      </button>
    </form>
  );
}
