import { FormEvent, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, CITIES } from '../../consts';
import { changeCity } from '../../store/main-process/main-process';
import { getRandomInteger } from '../../utils';
import { checkAuthentication } from '../../store/user-process/selectors';
import { loginUser } from '../../store/user-process/thunk-actions';

function Login(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const currentCity = CITIES[getRandomInteger(0, CITIES.length - 1)];
  const passwordTest = /(?=.*\d)(?=.*[a-z])/i;
  const isAuth = useAppSelector(checkAuthentication);
  const navigate = useNavigate();

  const handleCityButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(changeCity({ city: currentCity }));
    navigate(AppRoute.Main);
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (
      emailRef.current !== null &&
      passwordRef.current !== null &&
      passwordTest.test(passwordRef.current.value)
    ) {
      dispatch(
        loginUser({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      );
    }
  };

  if (isAuth) {
    navigate(AppRoute.Main);
  }

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>6 cities: Authorization</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={formSubmitHandler}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                ref={emailRef}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button className="login__submit form__submit button" type="submit">
              Sign in
            </button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              className="locations__item-link"
              to={AppRoute.Main}
              onClick={handleCityButtonClick}
            >
              <span>{currentCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
