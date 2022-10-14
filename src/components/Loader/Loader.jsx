import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export function Loader() {
    return (
      <div className={css.loader}>
        <RotatingLines
            strokeColor="red"
            strokeWidth="5"
            animationDuration="0.75"
            width="60"
            visible={true}
        />        
      </div>
  )
}