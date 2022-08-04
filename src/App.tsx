// Import hooks
import { useState } from 'react';

// Import interfaces
import { IFriendsContext } from "./interfaces/FriendsContextState";

// Import friends
import friends from './data/friends';

// Import context
import FriendsContext from './contexts/FriendsContext';

// Import components
import { ListFriends } from './components/ListFriends';
import { Button } from './components/Button';

// It returns the application
function App(): JSX.Element {

  // Create the state to save in the global context (friendsContext)
  const [friendsContextState, setFriendsContextState] = useState<IFriendsContext>(friends);

  // Create handle of click to clear the list
  const handleClick = (): void => setFriendsContextState({friends: []});
  
  return (
    <main className="root__main" >
      <div className="main__reminder" >
          {/** The title has the list length count */}
          <h1 className="reminder__title" >{friendsContextState.friends.length} birthdays today</h1>
          
          {/** Sharing the state with the components that require it */}
          <FriendsContext.Provider value={ {friendsContextState, setFriendsContextState} }>
            
            {/** Render the list of friends*/}
            <ListFriends />

          </FriendsContext.Provider>

          {/** It button clears the list */}
          <Button handleClick={ handleClick } value="Clear all" labelText="clear" />
      </div>
    </main>
  );
}

export default App;
