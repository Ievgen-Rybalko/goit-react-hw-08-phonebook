const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: '30px',
    fontWeight: 500,
    fontSize: 36,
    textAlign: 'center',
  },
  p: {
    fontWeight: 500,
    fontSize: 24,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome on our Home page!</h1>
    <p style={styles.p}>
      {' '}
      Do not have an account? --- Please REGISTER{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>{' '}
    </p>
  </div>
);

export default HomeView;
