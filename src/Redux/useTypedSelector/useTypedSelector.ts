import { RootState } from 'Redux/store'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
