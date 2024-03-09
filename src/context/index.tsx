import React from 'react';

const AppContext = React.createContext([]);

function AppProvider({ children }) {
  const [isCreatedButtonClicked, setIsCreateButtonExist] = React.useState(false);

  return (
    <AppContext.Provider value={[{ isCreatedButtonClicked, setIsCreateButtonExist }]}>{children}</AppContext.Provider>
  );
}

const useAppContext = () => {
  return React.useContext(AppContext);
};

export { useAppContext, AppProvider };
