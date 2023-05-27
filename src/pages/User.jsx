import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import { IconBrandCodepen, IconCode, IconUserPlus, IconUsers } from "@tabler/icons-react";
import ReposList from "../components/repos/ReposList";
import { getUserAndRepos } from "../context/github/GithubActions";

function User() {
  const params = useParams();
  const {dispatch, user, loading, repos} = useContext(GithubContext);
  useEffect(()=>{
    dispatch({type: 'SET_LOADING'});
    const getUserData = async() => {
      const userData = await getUserAndRepos(params.login)
      dispatch({type: 'GET_USER_AND_REPOS', payload: userData})
    };
    getUserData();
  }, [dispatch, params.login]);

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
    hireable
  } = user;

  if(loading) {
    return <Spinner />
  } 

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-2xl shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end ">
                <h2 className="card-title mb-0 text-white">{name}</h2>
                <p className="flex-none text-white">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge bg-green-300/10 text-green-300 border-none mt-2">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge bg-blue-300/10 text-blue-300 border-none mt-2">
                    Hireable
                  </div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="norefferer"
                  className="btn btn-outline"
                >
                  Visit Gihub Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
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
                    >{blog}</a>
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
                    >{twitter_username}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IconUsers size={40} />
            </div>
            <div className="stat-title pr-5">
              Followers
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IconUserPlus size={40} />
            </div>
            <div className="stat-title pr-5">
              Following
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IconBrandCodepen size={40} />
            </div>
            <div className="stat-title pr-5">
              Public Repos
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IconCode size={40} />
            </div>
            <div className="stat-title pr-5">
              Public Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
        <ReposList repos={repos} />
      </div>
    </>
  );
}
export default User