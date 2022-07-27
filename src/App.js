import { styles } from './appStyles'
import { Counter } from './features/counter/Counter';
import { Routers } from './Routers/Routers';


function App() {
  const classes = styles();

  return (
      <div className={classes.app}>
        <Routers />
      </div>

  );
}

export default App;
