import React from 'react';
import TabNavigator from 'react-native-tab-navigator';
import styles from './styles/App'
import Home from './components/home';
import List from './components/list';
import { 
	Image, 
	StyleSheet, 
	Text, 
	StatusBar,
	TextInput,
	View,
	ScrollView,
	Dimensions 
} from 'react-native';

class App extends React.Component {
	constructor (prop) {
		super(prop);
		this.state = {
			selectedTap: 'home'
		};
	}
	render() {
		const {width} = Dimensions.get('window');
		const inputWidth = width - 40;
		const inputPosition = width * 0.579 * 0.75;
		const ImgHeight = width*0.49*0.583;
		return (
			<TabNavigator>
				<TabNavigator.Item
					selected={this.state.selectedTap === 'home'}
					title="首页"
					selectedTitleStyle={{color:"#d81e06"}}
					renderIcon={() => <Image style={styles.icon} source={require('./resource/images/homepage.png')}/>}
					renderSelectedIcon={() => <Image style={styles.icon} source={require('./resource/images/homepage_select.png')} />}
					onPress={() => {
						this.handleChangeItem('home')
					}}
				>
					<Home/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTap === 'list'}
					title="列表"
					renderBadge={()=><View style={styles.badgeView}><Text style={styles.badgeText}>11</Text></View>}
					selectedTitleStyle={{color:"#d81e06"}}
					renderIcon={() => <Image style={styles.icon} source={require('./resource/images/activity.png')} />}
					renderSelectedIcon={() => <Image style={styles.icon} source={require('./resource/images/activity_select.png')} />}
					onPress={() => {
						this.handleChangeItem('list')
					}}
				>
					<List/>
				</TabNavigator.Item>
			</TabNavigator>
		);
	}

	handleChangeItem (data) {
		this.setState({
			selectedTap: data
		})
	}
}

export default App