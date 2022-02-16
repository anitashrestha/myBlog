import React from 'react';
import { useParams } from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    let { name } = useParams();
    const article = articleContent.find(article => article.name === name);

    // Error message if article does not exist
    if (!article) return <NotFoundPage/>;

    // Display other articles other than the clicked one
    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    );
    
};
export default ArticlePage;
