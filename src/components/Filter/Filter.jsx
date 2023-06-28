import { useSelector, useDispatch } from "react-redux";
import { filter } from "redux/filterSlice"; 
import css from './Filter.module.css'

export const Filter = () => {

  const filterValue = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filterChange = event => {
    dispatch(filter(event.currentTarget.value));
  };

    return (

     <form className= {css.formFilter}>
        <label className={css.formFilterLabel}>
            Find contacts by name:
            <input className={css.formFilterInput}
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              value={filterValue}
              onChange={filterChange}
            />
          </label>
        </form>        
    )

}



