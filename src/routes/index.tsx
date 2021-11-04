import { Route, Switch } from "react-router-dom";

import Destination from "../pages/Destination";
import Home from "../pages/Home";

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/destination" exact component={Destination} />
            </Switch>
        </>
    );
};
