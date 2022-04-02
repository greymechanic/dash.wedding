import Userfront from "@userfront/react";
Userfront.init("jb7pjprn");

const SignupForm = Userfront.build({
  toolId: "dnbanl"
});


function Signup() {
  return (
    <div className="container bright">
      <section>
        <SignupForm />
      </section>
    </div>
  );
}

export default Signup;