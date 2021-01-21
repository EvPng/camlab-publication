import React from 'react';
import { Link } from 'react-router-dom';
import './Publication.css';

class Publication extends React.Component {
    render() {
        return (
            <div className="publicationBox">
                <div className="pub-year">{this.props.year}</div>
                <div className="pub-summary">
                    <h3><a href="https://www.google.com">{this.props.title}</a></h3>
                    <p>{this.props.author}</p>
                    <p id="line3">In <span>{this.props.publicator}</span>, {this.props.issue}</p>
                </div>
                <ul className="pub-buttons">
                    <li key="pub-button-01">
                        <Link to="/" className="pub-link">
                            Download PDF
                        </Link>
                    </li>
                    <li key="pub-button-02">
                        <Link to={`/article/${this.props.id}`} className="pub-link">
                            Read Online
                        </Link>
                    </li>
                </ul>
                <div className="pub-images">
                    <img src={this.props.imgSrc[0]} alt={this.props.title} />
                    <img src={this.props.imgSrc[1]} alt={this.props.title} />
                </div>
            </div>
        );
    }
}

export default Publication;