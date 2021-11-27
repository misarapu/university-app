function Layout(props) {
  return (
    <div>
      <nav className="navbar bg-primary">
        <div className="container-fluid p-4">
          <h1 className="text-white fw-bold">
            <i class="bi bi-binoculars px-2"></i>
            Go to school now
          </h1>
        </div>
      </nav>
      <div className="container">
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
