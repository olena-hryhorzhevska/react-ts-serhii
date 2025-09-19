interface LoginStatusProps {
  isLoggedIn: boolean;
}

function LoginStatus({ isLoggedIn }: LoginStatusProps) {
  return (
  <>
  {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </>
  )
}

export default LoginStatus;