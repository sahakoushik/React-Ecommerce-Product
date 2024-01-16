import {useContext} from 'react'
import { AiFillStar } from "react-icons/ai";
import { FilterContext } from '../context/FilterContext';

const Rating = ({rating}) => {
    const {selectedRating,setSelectedRating} = useContext(FilterContext)
    
    const handelRating = (val) =>{
        setSelectedRating(val);
    }
    return (
        // console.log(selectedRating),
        <div onClick={()=>handelRating(rating)}>
            <AiFillStar color={(rating > selectedRating) ?  "gray" : "yellow"} size={"xl"}/>
        </div>
    )
}

export default Rating