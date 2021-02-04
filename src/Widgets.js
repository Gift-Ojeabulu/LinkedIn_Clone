import React from 'react';
import "./Widgets.css";
import InfoIcon from "material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
    const newsArticle = (heading, subtitle) => (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordIcon/>
                </div>

                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>

            </div>

    );

    return( 
        <div className="widgets">
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
            </div>

            {newsArticle("Papa react is back",'Top news -9099 readers')}
            {newsArticle("Coronavirus: Uk updates")}
            {newsArticle("Papa react is back",'Top news -9099 readers')}
            {newsArticle("Coronavirus: Uk updates")}
            {newsArticle("Papa react is back",'Top news -9099 readers')}
            {newsArticle("Coronavirus: Uk updates")}
        </div>
        
    );
}

export default Widgets;