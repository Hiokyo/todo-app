import { createContext } from 'react'
import { initState, InitStateType } from './reducer'


const Context = createContext<{
    state: InitStateType;
    dispatch: React.Dispatch<any>;
  }>({
    state: initState,
    dispatch: () => null
  });


export default Context