import UserItem from './UserItem'
import slice from './userItem.slice'

export const {
	name,
	actions: { setSelectUserItemModal },
	reducer,
} = slice

export default UserItem
