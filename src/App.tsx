import { GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import jsonServerDataProvider from '@refinedev/simple-rest';

import {
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  CarCreate,
  CarEdit,
  CarShow,
  CarsList,
} from "./pages/Cars";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { FillUpCreate } from "./pages/FillUps/create";
import { FillUpList } from "./pages/FillUps/list";

function App() {
  const API_URL = 'https://localhost:7005';
  const dataProvider = jsonServerDataProvider(API_URL);
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
              <Refine
                notificationProvider={useNotificationProvider}
                routerProvider={routerBindings}
                dataProvider={dataProvider}
                resources={[
                  {
                    name: "vehicles",
                    list: "/vehicles/",
                    create: "/vehicles/create",
                    show: "/vehicles/:id/show",
                    edit: "/vehicles/:id/edit",
                    meta:{
                      canDelete: true,
                    }},
                    {
                    name: "refuelings",
                    list: "/refuelings/",
                    create: "/refuelings/create/:id",
                    show: "/refueling/:id/show",
                    edit: "/refueling/:id/edit",
                    meta:{
                      canDelete: true,
                    },
                    },
                ]}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "Xkc7M7-Mc4SfI-O8wXIv",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource="vehicles" />}
                    />
                    <Route path="/vehicles">
                      <Route index element={<CarsList />} />
                      <Route path="create" element={<CarCreate />} />
                      <Route path=":id/edit" element={<CarEdit />} />
                      <Route path=":id/show" element={<CarShow />} />
                    </Route>
                    <Route path="/refuelings">
                      <Route index element={<FillUpList />} />
                      <Route path="create/:id" element={<FillUpCreate />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
