import { IconError404, IconExternalLink, IconEye, IconGitFork, IconInfoCircle, IconLink, IconStarFilled } from '@tabler/icons-react';
import PropTypes from 'prop-types'

function ReposItem({repo}) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} target="_blank" rel="noreferrer" className="flex items-center gap-x-2">
            <IconLink /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="flex">
          <div className="mr-2 badge badge-lg bg-blue-300/10 text-blue-300 flex items-center border-none">
            <IconEye size={16} className="mr-2" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-lg bg-amber-300/10 text-amber-300 flex items-center border-none">
            <IconStarFilled size={16} className="mr-2" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-lg bg-red-300/10 text-red-300 flex items-center border-none">
            <IconInfoCircle size={16} className="mr-2" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-lg bg-sky-300/10 text-sky-300 flex items-center border-none">
            <IconGitFork size={16} className="mr-2" /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

ReposItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default ReposItem