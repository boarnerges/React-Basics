function WelcomeDialog() {
  return (
    <>
      <Dialog title="welcome" content="This is react Course" />
    </>
  );
}

export default WelcomeDialog;

function FancyBorder(props) {
  return <div>{props.children}</div>;
}

function Dialog(props) {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">{props.title}</h1>
      <p>{props.content}</p>
    </FancyBorder>
  );
}
