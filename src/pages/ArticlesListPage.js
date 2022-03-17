import React from "react";

import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
	<>
		<main className="main-container">
			<div className="db">
				<div className="article-list mlr">
					<div className="mt">
						<h1>Articles</h1>
						<ArticlesList articles={articleContent} />
					</div>
				</div>
			</div>
		</main>
	</>
);
export default ArticlesListPage;
