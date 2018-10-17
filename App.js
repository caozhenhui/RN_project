import {createStackNavigator} from 'react-navigation';
import Index from './components/index';
import List from './components/list';

const App = createStackNavigator({
	Index: {screen: Index},
	List: {screen: List}
});

export default App;