
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginRight: '-90px',
    height: '100vh',
  },
  form: {
    display: 'inline',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: '10',
    backgroundImage: 'linear-gradient(to right, #fe8c00 0%, #f83600  51%, #fe8c00  100%)',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    fontWeight: '700',
    border: 'none',
    borderRadius:'45px',
    boxShadow: '0px 8px 15px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    cursor: 'pointer',
    outline: 'none',
  },
}));



