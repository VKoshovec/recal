import { ColorRing } from 'react-loader-spinner';
import { useSelector } from "react-redux";
import { selectLoading } from '../redux/selectors';

const Loader = () => {
    const Loading = useSelector(selectLoading)
    return(Loading && <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />);
}

export default  Loader;