import { useState } from "react";

export function Form() {
  const [info, setInfo] = useState({
    username: "huy31",
    password: "12345",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };

  const handleChangeUsername = (e) => {
    // console.log(e.target.value);
    // e.target: o input
    let newUsername = e.target.value;
    let prop = e.target.name;
    setInfo({
      ...info,
      [prop]: newUsername,
    });
  };

  const handleChangePassword = (e) => {
    // console.log(e.target.value);
    let newPassword = e.target.value;
    let prop = e.target.name;
    setInfo({
      ...info,
      [prop]: newPassword,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            value={info.username}
            onChange={handleChangeUsername}
            type="text"
            name="username"
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            value={info.password}
            onChange={handleChangePassword}
            name="password"
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer transition"
        />
      </form>
    </>
  );
}
