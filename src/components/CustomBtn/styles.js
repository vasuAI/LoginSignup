import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    btnCon: {
      height: 35,
      borderWidth: 0.2,
      borderRadius:8,
      marginVertical: 10,
      marginHorizontal: 20,
    },
    Btn_Primary: {
        borderColor: '#ffff',
        backgroundColor: '#6C63FF',
    },
    Btn_Secondary: {
        borderWidth: 1.5,
        borderColor: '#6C63FF',
        backgroundColor: '#ffff',
    },
    BtnText:{
        alignItems:'center',
        justifyContent:'center'
    },
    BtnText_Primary: {
        fontSize:16,
        color: '#fff',
    },
    BtnText_Secondary: {
        fontSize:14,
        color: 'black',
    },
  });
  export default styles