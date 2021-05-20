import React from 'react';
import RepoItem from './RepoItem';

function Repos(props) {
  const { repos } = props;
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
}

export default Repos;
