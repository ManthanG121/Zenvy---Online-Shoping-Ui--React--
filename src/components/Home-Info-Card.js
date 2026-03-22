import React from 'react';

const Home_Info_Card = (props) => {
    return (
        <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
            <div className="card text-bg-secondary mb-3 shadow-sm" style={{ maxWidth: '18rem', height:'11rem'}}>
                <div className="card-header"><b>The Zenvy Experience</b></div>
                <div className="card-body">
                    <h5 className="card-title">{props.ftitle}</h5>
                    <p className="card-text">
                        {props.ftext}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home_Info_Card;