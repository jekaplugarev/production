import {FC} from 'react'
import "./styles/index.scss"
import {Route, Routes} from "react-router-dom";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "../shared/lib/classNames/classNames";

const App: FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames("app", {},[theme])}>
            <Routes>
                <Route></Route>
            </Routes>
        </div>
    )
}

export default App;