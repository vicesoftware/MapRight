import UserItem from './UserItem'
import slice from './userItem.slice'

export const {
	name,
	actions: { setSelectedUserItemModal },
	reducer,
} = slice

export default UserItem
