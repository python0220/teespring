import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    SuggestionTab: React.MutableRefObject<HTMLDivElement | null>;
}


const SearchSuggestion = ({SuggestionTab}: Props) => {



  return (
    <div ref={SuggestionTab} className='Search-Suggestions'>
        <div className="Suggestion-Box">
            <div className="icons">
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="Suggestion">
                Mobile
            </div>
        </div>
        <div className="Suggestion-Box">
            <div className="icons">
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="Suggestion">
                Laptops
            </div>
        </div>
        <div className="Suggestion-Box">
            <div className="icons">
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="Suggestion">
                KeyBoards
            </div>
        </div>
        <div className="Suggestion-Box">
            <div className="icons">
                 <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="Suggestion">
                Keyboards
            </div>
        </div>
    </div>
  )
}

export default SearchSuggestion
