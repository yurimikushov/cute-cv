import InternalDndList from './DndList'
import DndItem from './DndItem'

type DndListInterface = typeof InternalDndList & {
  Item: typeof DndItem
}

const DndList = InternalDndList as DndListInterface

DndList.Item = DndItem

export default DndList
