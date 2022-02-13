import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


  return (
    <Container maxWidth="lg" style={{"padding":"0px", "margin": "0px" }}>
      
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={0}>
            <Grid item xs={9} >
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={2} style={{position:'fixed', right:'90px'}}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
