import { Route , useNavigate } from "react-router-dom";
const PivateRoute = ({children, ...rest}) => {

    const Nav = useNavigate();
    const isAuthentated = false;
    return(
    
        <Route
        {...rest}
        
        render={(i)=>(
            isAuthentated ? (children) : (Nav('/login'))
        )}
                />
    
    );
}
export default PivateRoute;