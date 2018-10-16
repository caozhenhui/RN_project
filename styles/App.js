import { 
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		position: 'relative'
	},

	input: {
		position: 'absolute',
		height: 40,
		paddingLeft: 8,
		backgroundColor: '#fff',
		borderRadius: 4,
		marginLeft: 20
	},

	categories: {
		width: '100%',
		flex:1
	},

	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10
	},

	listItem: {
		width: '49%'
	},

	itemImg: {
		width: '100%',
		borderRadius: 8
	},

	itemTitle: {
		marginTop: 8,
		marginBottom: 8,
		textAlign: 'center',
		color: '#333',
		fontSize: 14
	},

	tabbar: {
		flex:1
	},

	icon: {
		width: 24,
		height: 24
	},

	badgeView:{
		width:22,
		height:14 ,
		backgroundColor:'#f85959',
		borderWidth:1,
		marginLeft:10,
		marginTop:3,
		borderColor:'#FFF',
		alignItems:'center',
		justifyContent:'center',
		borderRadius:8
	  },

	  badgeText:{
		color:'#ffffff',
		fontSize:8
	  }
});

export default styles;