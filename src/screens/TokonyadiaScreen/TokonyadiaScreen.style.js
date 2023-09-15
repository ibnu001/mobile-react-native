import { StyleSheet } from "react-native";

export const tokonyadiaStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    headerContainer: {
        paddingTop: 8,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    listTitleContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
        // borderWidth: 1,
        // borderColor: 'black',
    },
    listTitle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 24,
        color: '#f56b00',
        textDecorationLine: 'underline',
    },
    listContainer: {
        paddingVertical: 8,
        flex: 4,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    tabBarContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tabBarButton: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f56b00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabBarText: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
    },
    btnLogout: {
        backgroundColor: '#f56b00',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    }
})