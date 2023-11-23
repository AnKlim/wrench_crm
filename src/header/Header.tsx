import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="header-logo" />
        <h1>Wrench CRM</h1>
      </div>
      <div>
        <div className="account-logo" />
        <span>Имя Фамилия</span>
      </div>
    </header>
  );
};
