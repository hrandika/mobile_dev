import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.scss';

export function Login() {
  return (
    <div className="host">
      <div className="toolbar"></div>
      <div className="header">
        <img src="assets/logo.png" alt="logo" />
        <h1>Login</h1>
      </div>
      <div className="credentials">
        <TextField label="User Name" variant="standard" />
        <TextField label="Password" variant='standard' />
        <Button variant='contained'>Login</Button>
      </div>
    </div>
  );
}
