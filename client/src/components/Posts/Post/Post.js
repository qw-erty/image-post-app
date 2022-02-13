import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
 
  return (
    <Card className={classes.card}>
      <CardHeader 
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        
        title={
                <div style={{fontSize: "16px", fontWeight: "bold"}}>
                    {post.creator} 
                </div>
            }
        subheader={
                <div style={{fontSize: "10px"}}>
                    {moment(post.createdAt).fromNow()}
                </div>
            }
      />
      <CardMedia
        className={classes.media}
        image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        title={post.title}

      />
      
      <CardActions className={classes.actions} disableActionSpacing>

      <Grid container>

        <Grid item xs={1}>
        </Grid>

        <Grid item xs={2}>
          <IconButton aria-label="Add to favorites" style={{padding : '8px', margin: 0}}>
            <FavoriteIcon style={{color: "red", padding:0 , fontSize: '16px'}} onClick={() => dispatch(likePost(post._id))}/> 
          </IconButton>
        </Grid>

        <Grid item xs={9}>
          <div style={{fontSize : '12px', paddingTop: '8px' , fontWeight: 'bold'}}>
              Liked by {post.likeCount}
          </div> 
        </Grid>
        
      </Grid>

        
     
      </CardActions>

      <CardContent className={classes.content}>
            <div style={{fontSize: "14px"}}>
            {post.message}
            </div>

      </CardContent>

      <div style={{fontSize: '14px', padding: '10px'}}>
        {post.tags.map((tag) => `#${tag} `)}
      </div>
      
    </Card>
  );
};

export default Post;
