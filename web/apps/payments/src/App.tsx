import React, { useEffect } from "react";
import { Container } from "./components/Container";
import { parseAndHandleRequest } from "./services/billing-service";
import S from "./utils/strings";

const App: React.FC = () => {
    const [failed, setFailed] = React.useState(false);

    useEffect(() => {
        parseAndHandleRequest().catch(() => {
            setFailed(true);
        });
    }, []);

    return <Container>{failed ? S.error_generic : <Spinner />}</Container>;
};

export default App;

const Spinner: React.FC = () => <div className="loading-spinner"></div>;
