import OtherInformation from 'components/OtherDetails';
import CreateSuccessComponent from 'components/createSuccess';
import EditSelection from 'components/PledgeSearch';
import PladgeEditList from 'components/PledgeList';
import { AppProvider } from 'context';
import { Layout } from 'Layout';
import { CreatePledge } from 'pages/Create';
import EditPage from 'pages/Edit';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteLoading } from 'RouteLoading';
import EditMain from 'components/EditMainPage';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" key="/test" element={<Layout />}>
          <Route
            path="/create"
            element={
              <React.Suspense fallback={<RouteLoading />}>
                <CreatePledge mode='create' />
              </React.Suspense>
            }
          >
            <Route path=":colletralCode" element={<OtherInformation />} />
          </Route>
          <Route path="/success" element={<CreateSuccessComponent />} />
          <Route path="/pledgelist" element={<EditPage />} >
            <Route index element={<EditSelection />} />
            <Route path=":cif" element={<PladgeEditList />} />
          </Route>

          <Route path='/edit/:colletralCode' element={
            <React.Suspense fallback={<RouteLoading />}>
              <EditMain />
            </React.Suspense>
          }>
          </Route>
        </Route>
      </Routes>
    </AppProvider>
  );
};

export default App;
