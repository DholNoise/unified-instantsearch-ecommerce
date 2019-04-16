import React from 'react';

import { Panel } from 'react-instantsearch-dom';

import PanelCategories from './PanelCategories';
import PanelColors from './PanelColors';
import PanelSizes from './PanelSizes';
import PanelPrices from './PanelPrices';

class LeftColumn extends React.Component {

    render() {
        return (
            <div className="euip-leftColumn">
                <PanelCategories />
                <PanelColors />
                <PanelSizes />
                <PanelPrices />
            </div>
        )
    }

}

export default LeftColumn;