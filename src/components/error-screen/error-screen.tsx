import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { uploadOffers } from '../../store/main-process/thunk-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="error-screen">
      <p>При загрузке сайта произошла ошибка</p>
      <button
        type="button"
        onClick={() => {
          dispatch(uploadOffers());
        }}
      >
        Попробовать ещё раз
      </button>
    </div>
  );
}

export { ErrorScreen };
