import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>
        Welcome to the best app for storing your contacts!
      </h1>
    </div>
  );
}
