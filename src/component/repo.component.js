import React from 'react';

const Repo = ({ repo }) => {

	var readableDate = new Date(repo.created_at).toLocaleDateString('en-US', 
	{ year: 'numeric', month: 'short', day: 'numeric' }).replace(',', '');	
	
	return (
		
		<ul className="results-list">
		{repo.payload && 
			<li className="">
				<p>
				   <a href={repo.repo.url} className="results-title">
					  A {repo.type} Was Performed by {repo.actor.login.charAt(0).toUpperCase() + repo.actor.login.substr(1)}
				   </a>
				</p>
				<p>
					<a href={repo.repo.url} className="results-url">{repo.repo.url}</a>
				</p>
				<p>
					{readableDate} - Event id: {repo.id}, repo id: {repo.repo.id}, repo name: {repo.repo.name}, 
					user id: {repo.actor.id}, user avatar url: {repo.actor.avatar_url}
					{repo.org && <span>, org id: {repo.org.id}, org login: {repo.org.login}, org url: {repo.org.url} 
					</span>}...
				</p>
			</li>}
			<br />
			<br />
		</ul>	
		
	);
};

export default Repo;