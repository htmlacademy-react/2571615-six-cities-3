import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <>
    <h1>404 Not Found</h1>
    <p>Извините, запрашиваемая страница не существует</p>
    <Link to="/">Вернуться на главную страницу</Link>
  </>
);

export default NotFoundPage;
