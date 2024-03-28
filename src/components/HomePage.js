const HomePage = () => {
    const pageStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f7f7f7',
      color: '#333'
    };
  
    const headingStyles = {
      color: '#0d6efd', 
      marginBottom: '0.5em'
    };
  
    const paragraphStyles = {
      fontSize: '1.2em'
    };
  
    return (
      <div style={pageStyles}>
        <h1 style={headingStyles}>Welcome to home page</h1>
        <p style={paragraphStyles}>Click on the sidebar to get tasks</p>
      </div>
    );
  };
  
  export default HomePage;
  