import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { LegalNotice } from './pages/LegalNotice';
import { Home } from './pages/Home';
import { FAQ } from './pages/FAQ';
import { PageNotFound } from './pages/PageNotFound';
import { Projects } from './pages/Projects';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/mes-projets">
                            <Projects />
                        </Route>
                        <Route exact path="/faq">
                            <FAQ />
                        </Route>
                        <Route exact path="/mentions-legales">
                            <LegalNotice />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </QueryClientProvider>

    );
}

export default App;
