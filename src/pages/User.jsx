import { FaCodepen, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import RepoList from "../components/repos/RepoList";
import GitHubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GitHubContext);
  const params = useParams();

  let pos = { left: 0, x: 0 };
  let attatchment = false;

  const mouseDownHandler = function (e) {
    attatchment = true;
    pos = {
      left: e.currentTarget.scrollLeft,
      x: e.clientX,
    };
  };

  const mouseMoveHandler = function (e) {
    if (attatchment === true) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;

      // Scroll the e.currentTargetment
      e.currentTarget.scrollLeft = pos.left - dx;
    }
  };

  const mouseUpHandler = function (e) {
    attatchment = false;
  };

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <h1>Spinner</h1>;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3:lg:grid-cold-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0 text-stone-200">{name}</h2>
                <h2>{login}</h2>
                {/* <p className="text-stone-200">{login}</p> */}
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div
              className="w-full rounded-lg shadow-lg bg-base-100 stats scroll-bar-hidden scrollable"
              onMouseMove={mouseMoveHandler}
              onMouseDown={mouseDownHandler}
              onMouseUp={mouseUpHandler}
            >
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://${blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      @{twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className="w-full mb-6 rounded-lg shadow-lg bg-base-100 stats scroll-bar-hidden scrollable"
          onMouseMove={mouseMoveHandler}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
        >
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList />
      </div>
    </>
  );
}

export default User;
