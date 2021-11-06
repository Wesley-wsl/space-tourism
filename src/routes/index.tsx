import { Route, Switch } from "react-router-dom";

import Crew from "../pages/Crew";
import Destination from "../pages/Destination";
import Home from "../pages/Home";
import Technology from "../pages/Technology";

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/destination" exact component={Destination} />
                <Route path="/crew" exact component={Crew} />
                <Route path="/technology" exact component={Technology} />
            </Switch>
        </>
    );
};
