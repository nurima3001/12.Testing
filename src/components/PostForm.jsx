import { useState } from 'react'
import { Alert, Button, Card, CardActions, CardContent, CircularProgress,TextField, Typography,} from '@mui/material'
import  usePostService  from '../services/post'

export const PostForm = () => {
      const [post, setPost] = useState('')
      const { createPosts, loading } = usePostService()
      const [error, setError] = useState('')
      const handleCreatePosts = async () => {
          setError('')
          if(post === '' ){
            setError('Post cannot be empty')
            return
          }

          await createPosts(post)
          setPost('')
  }

  return <Card>
     <CardContent>
        <Typography variant="h6">Post New Feed</Typography>
        <TextField data-testid="post-field" multiline placeholder="post" value={post}onChange={({ target: { value } }) => setPost(value)} />
        { error !== '' && <Alert severity='error' data-testid="alert-error">{error}</Alert> }
      </CardContent>
      <CardActions>
        <Button data-testid="post-button" variant="contained" onClick={handleCreatePosts}>
          {loading && <CircularProgress /> }
          Post
        </Button>
      </CardActions>
    </Card>
  
}
