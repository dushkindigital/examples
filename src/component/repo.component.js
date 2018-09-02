import React from 'react';

const Repo = ({ repo }) => {
	return (
		<ul className="collection hoverable">
			<li className="collection-item avatar grey darken-1 black-text">
				<p>
					<a href={repo.url} className="black-text">{repo.name}</a>
				</p>
				<p>
					<a href={repo.url} className="black-text">{repo.url}</a>
				</p>
				<p>
					{repo.payload.description}
				</p>
			</li>
		</ul>
	);
};

export default Repo;