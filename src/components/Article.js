import React from 'react';
import '../App.css';
import './Article.css';
import { useParams, Link } from 'react-router-dom';


const Article = ({ data }) => {
    const { articleId } = useParams();
    const article = data.find(p => p.id === articleId);
    let pageData;

    if (article) {
        pageData = (
            <div className="article">
                <div className="jumbotron" style={{backgroundImage: `url(${article.imgSrc[0]})`}}>
                    <h1>{article.title}</h1>
                </div>
                <div className="wrapper">
                    <div className="article-navbar left">
                        <nav><Link to="/">SHELF</Link></nav>
                    </div>
                    <div className="article-navbar middle">
                        <button>{`<--`}</button>
                        <p>subtitle</p>
                        <button>{`-->`}</button>
                    </div>
                    <div className="article-navbar right">
                        <button>A-</button>
                        <button>A+</button>
                        <button>O</button>
                    </div>
                </div>
                <div className="wrapper">
                    <section className="col left">left</section>
                    <section className="col middle">middle</section>
                    <section className="col right">right</section>
                </div>
            </div>
        );
    } else {
        pageData = <h2> Sorry, article doesn't exist. </h2>;
    }

    return (
        <div className="content">{pageData}</div>
    );
};

export default Article;