import React from 'react';
import '../App.css';
import Publication from './Publication';
import data from './data';
// import Article from './Article';

class PublicationList extends React.Component {
    render() {
        return (
            <div className="wrapper" id="pub-list">
                {data.map((p)=>(
                    <Publication key={p.id}
                             id={p.id} 
                             title={p.title} 
                             author={p.author}
                             year={p.year}
                             publicator={p.publicator}
                             issue={p.issue}
                             imgSrc={p.imgSrc} />
                ))}
            </div>
        );
    }
}

export default PublicationList;