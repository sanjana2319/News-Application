import React from 'react';
import NewsCards from '../NewsCards/NewsCards';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from "@material-ui/core";

import useStyles from "./styles.js";

const NewsCard = ({article: {description, publishedAt, source, title, url, urlToImage}, i}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea href = {url} target = "_blank">
                <CardMedia className = {classes.media} image = {urlToImage || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiainfoline.com%2Farticle%2Fnews-sme%2Ffinance-woes-of-indian-msmes-to-ease-as-nsic-rubique-join-hands-116082400376_1.html&psig=AOvVaw2Sl8QaJ30kZ91zOApAQ5PM&ust=1606651172179000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjloJWYpe0CFQAAAAAdAAAAABAT"} /> 
                <div className = {classes.details}>
    <Typography  varient= "body2" color = "textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
    <Typography  varient= "body2" color = "textSecondary" component="h2">{source.name}</Typography>
                </div> 
    <Typography className={classes.title} gutterBottom varient= "h5">{title}</Typography>
                <CardContent>   
    <Typography varient= "body2" color = "textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size = "small" color = "primary">Learn More</Button>
    <Typography varient= "h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>

        </Card>
    )
}

export default NewsCard;