import { useContext } from "react";
import GitHubContext from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";

function RepoList() {
  const { repos } = useContext(GitHubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.map((repo, index) => (
          <RepoItem key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoList;
