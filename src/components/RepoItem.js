import React from 'react';
function RepoItem(props) {
  console.log(props);
  const { name, html_url } = props.repo;
  console.log(name);
  return (
    <div className="card">
      <h3>
        <a href={html_url}>{name}</a>
      </h3>
    </div>
  );
}

export default RepoItem;
