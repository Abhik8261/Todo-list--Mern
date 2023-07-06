import { TABS } from "../Redux/action/type";

import { useDispatch } from 'react-redux';
import './Common.css'
import { toggleTab } from "../Redux/action";


const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;