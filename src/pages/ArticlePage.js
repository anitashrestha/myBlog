import React from "react";
import { useParams } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";
import Comment from "../components/Comment";

const ArticlePage = () => {
	let { name } = useParams();
	const article = articleContent.find((article) => article.name === name);

	// Error message if article does not exist
	if (!article) return <NotFoundPage />;

	// Display other articles other than the clicked one
	const otherArticles = articleContent.filter(
		(article) => article.name !== name
	);

	return (
		<>
			<main className="main-container">
				<div className="db">
					<div className="mlr">
						<div className="mt">
							<h1>{article.title}</h1>
							{article.content.map((paragraph, key) => (
								<p key={key}>{paragraph}</p>
							))}

							<h3>Other Articles:</h3>
							<ArticlesList articles={otherArticles} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};
export default ArticlePage;
