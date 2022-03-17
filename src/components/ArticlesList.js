import React from "react";
import { Link } from "react-router-dom";

// create articles prop so that we can list diff articles like favorite, most popular, creating reusable component
const ArticlesList = ({ articles }) => (
	<>
		<div className="">
			<div className="">
				{articles.map((article, key) => (
					<article className="mt article-item">
						<Link
							className="article-list-item"
							key={key}
							to={`/article/${article.name}`}
						>
							<h3 className="article-title">{article.title}</h3>
							{/* [0] means first paragraph and substring is used to display 150 characters */}
							<p>{article.content[0].substring(0, 150)}...</p>
						</Link>
					</article>
				))}
			</div>
		</div>
	</>
);

export default ArticlesList;
