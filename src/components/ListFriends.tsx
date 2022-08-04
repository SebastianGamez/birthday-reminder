// Imports context custom hook
import { useFriendsContext } from '../hooks/useFriendsContext';

// Imports interfaces
import { IFriend } from '../interfaces/FriendsContextState';

// It returns the friend list
export const ListFriends = (): JSX.Element => {
    
    //Get the global state
    const { friendsContextState } = useFriendsContext();
  
    return (
        <ul className="reminder__list" aria-label="list_friends" >
            
            {/** From the global state, gets each friend and puts each one in the list */}
            {friendsContextState.friends.map( ({id, name, age, image }: IFriend): JSX.Element => {

                return(

                    <li className="list__friend" key={id} aria-label="friend" >
                        <div className="friend__image">
                            <img src={image} alt={name} className="image__image--friend" />
                        </div>
                        <div className="friend__information">
                            <h3 className="information__name--friend">{name}</h3>
                            <p className="information__age--friend">{age} years</p>
                        </div>
                    </li>

                );

            })}

        </ul>
    );
}
