import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";
import "./App.css";
import AuthenticatePage from "./pages/AuthenticatePage";
import HomePage from "./pages/homePage";
import ViewPeoplePage from "./pages/ViewPeoplePage";
import AppointmentPage from "./pages/appointmentPage";
import EquipmentPage from "./pages/equipmentPage";
import OverviewPage from "./pages/OverViewPage";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>

                <Route path="/login" exact>
                    <AuthenticatePage />
                </Route>
                <Route path="/overview" exact>
                    <OverviewPage />
                </Route>
                <Route path="/people" exact>
                    <ViewPeoplePage />
                </Route>
                <Route path="/equipments" exact>
                    <EquipmentPage />
                </Route>
                <Route path="/appointments" exact>
                    <AppointmentPage />
                </Route>
                {/* If no matching url exist, then redirect to home  */}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
