import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.filters.name)

  const onChange = (event) => {
    dispatch(changeFilter(event.target.value))
  }

  return (
    <div className={css.container}>
      <label className={css.labelFindContact}>Find contacts by name
        <input className={css.contactFindInput} type="text" value={searchValue} onChange={onChange} />
      </label>
    </div>
  );
}
