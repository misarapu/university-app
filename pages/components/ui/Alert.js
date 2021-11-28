function Alert(props) {
  return (
    <div className={"alert alert-" + props.type} role="alert">
      {props.message}
    </div>
  );
}

function AlertPrimary(props) {
  return <Alert type="primary" message={props.message} />;
}

function AlertWarning(props) {
  return <Alert type="warning" message={props.message} />;
}

function AlertDanger(props) {
  return <Alert type="danger" message={props.message} />;
}

export {
    AlertDanger,
    AlertPrimary,
    AlertWarning
};