import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import styles from '../styles/App'
import Home from './home';
import List from './list';
import { 
	Image,
	View,
	Text
} from 'react-native';

class Index extends React.Component {
	static navigationOptions = {
		header:null
	}

	constructor (prop) {
		super(prop);
		this.state = {
			selectedTap: 'home'
		};
	}
	render() {
		return (
			<TabNavigator>
				<TabNavigator.Item
					selected={this.state.selectedTap === 'home'}
					title="首页"
					selectedTitleStyle={{color:"#d81e06"}}
					renderIcon={() => <Image style={styles.icon} source={require('../resource/images/homepage.png')}/>}
					renderSelectedIcon={() => <Image style={styles.icon} source={require('../resource/images/homepage_select.png')} />}
					onPress={() => {
						this.handleChangeItem('home');
					}}
				>
					<Home nav={this.props.navigation}/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTap === 'list'}
					title="列表"
					renderBadge={()=><View style={styles.badgeView}><Text style={styles.badgeText}>11</Text></View>}
					selectedTitleStyle={{color:"#d81e06"}}
					renderIcon={() => <Image style={styles.icon} source={require('../resource/images/activity.png')} />}
					renderSelectedIcon={() => <Image style={styles.icon} source={require('../resource/images/activity_select.png')} />}
					onPress={() => {
						this.handleChangeItem('list');
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

export default Index;