import Userfront from "@userfront/react";
Userfront.init("jb7pjprn");

// const SignupForm = Userfront.build({
//   toolId: "dnbanl"
// });

const LoginForm = Userfront.build({
  toolId: "adnbdo",
});

function Login() {
  return (
    <div className="container bright">
      <section>
        <LoginForm />
      </section>
    </div>
  );
}

export default Login;