import { Button, Grid } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'

type Props = {}

export default function Error404({}: Props) {
  const RedirectHome = () => {}
  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <div>
          <h2>Error404</h2>
          <Link to="/">
            <Button variant="contained" endIcon={<HomeIcon />} onClick={RedirectHome}>
              Go to Home
            </Button>
          </Link>
        </div>
      </Grid>
    </>
  )
}
