import Userfront from "@userfront/react";
Userfront.init("jb7pjprn");

const ResetForm = Userfront.build({
  toolId: "rldnlo",
});

function Reset() {
  return (
    <div className="container bright">
      <section>
        <ResetForm />
      </section>
    </div>
  );
}

export default Reset;