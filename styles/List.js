import { 
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		backgroundColor: '#fff'
	},
	list: {
		flex: 1
	},
	item: {
		flexDirection: 'row',
		height: 130,
		borderWidth: 1,
		borderColor: '#ccc',
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10,
		paddingTop: 8,
		paddingLeft: 8,
		paddingRight: 8,
		paddingBottom: 8
	},
	img: {
		width: 88,
		height: '100%',
		marginRight: 10,
		backgroundColor: '#ccc'
	},
	textBox: {
		flex: 1,
		height: '100%',
		justifyContent: 'space-between'
	}
});

export default styles;