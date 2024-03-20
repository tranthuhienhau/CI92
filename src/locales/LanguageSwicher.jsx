import React from 'react';

function LanguageSwitcher() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}

export default LanguageSwitcher;
