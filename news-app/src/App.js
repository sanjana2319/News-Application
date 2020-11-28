import React, { useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js"

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();

    const alanKey = "83697bc35f19d73bcc4202c0eba008372e956eca572e1d8b807a3e2338fdd0dc/stage"; 
    useEffect(() => {
         alanBtn({
             key: alanKey,
             onCommand: ({ command, articles }) => {
                if(command === "newsHeadlines") {
                    setNewsArticles(articles);
                }
             }
         })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
               <img src={'images/NewsFeed.jpg'} className= {classes.newsLogo} alt= "news logo" />
            </div>
            <NewsCards articles = {newsArticles} />
        </div>
    )
}

export default App;

//558d823fa3e24fb086a669b92ec28caa