import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, searchUsers, clearUsers } = useContext(GitHubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    if (text === "" || text === " ") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
    e.preventDefault();
  };

  const handleClick = () => {
    clearUsers();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div className="inline-block">
        <form onSubmit={handleSubmit}>
          <div className="form-control ">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-lg btn-ghost" onClick={handleClick}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
